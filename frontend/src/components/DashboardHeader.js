import { FiMenu } from "react-icons/fi";

const DashboardHeader = ({ userName, onMenuOpen }) => {
    return (
        <header className="flex justify-between items-center w-full max-w-lg bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{userName} 님</h2>
            <button onClick={onMenuOpen}>
                <FiMenu size={28} className="text-gray-700" />
            </button>
        </header>
    );
};

export default DashboardHeader;
