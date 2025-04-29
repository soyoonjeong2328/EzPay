import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  getMyAccounts, setMainAccount } from "../../api/UserAPI";

const MainAccountSettings = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  const [currentMainId, setCurrentMainId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await getMyAccounts();
        const accountList = res.data;
        setAccounts(accountList);

        // 현재 대표계좌 찾기
        const main = accountList.find(acc => acc.isMain);
        if (main) {
          setCurrentMainId(main.accountId);
        }
      } catch (err) {
        console.error("계좌 목록 불러오기 실패", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  const handleSelectMain = async (accountId) => {
    if (accountId === currentMainId) return;
  
    try {
      await setMainAccount(accountId);
  
      // 대표 계좌 변경 성공 후 계좌 목록 다시 불러오기
      const res = await getMyAccounts();
      const updatedAccounts = res.data;
      setAccounts(updatedAccounts);
  
      const main = updatedAccounts.find(acc => acc.main);
      if (main) {
        setCurrentMainId(main.accountId);
      }
  
      alert("대표 계좌가 변경되었습니다!");
    } catch (err) {
      console.error("대표 계좌 변경 실패", err);
      alert("대표 계좌 변경에 실패했습니다.");
    }
  };
  

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">로딩 중...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">대표 계좌 설정</h2>

      {accounts.length === 0 ? (
        <div className="text-center text-gray-500">등록된 계좌가 없습니다.</div>
      ) : (
        <div className="space-y-4">
          {accounts.map((account) => (
            <div
              key={account.accountId}
              className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer 
                ${account.main ? "bg-blue-100 border-blue-400" : "bg-white hover:bg-gray-100"}`}
              onClick={() => handleSelectMain(account.accountId)}
            >
              <div>
                <p className="font-semibold">{account.bankName} - {account.accountNumber}</p>
                <p className="text-gray-500 text-sm">{account.balance.toLocaleString()} 원</p>
              </div>
              {account.main && (
                <span className="text-blue-600 font-bold text-sm">대표</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 뒤로가기 버튼 */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/settings")}
          className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg font-semibold"
        >
          설정으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default MainAccountSettings;
