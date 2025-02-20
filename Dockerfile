# 1. 빌드 스테이지 (Gradle 빌드 전용)
FROM openjdk:17-jdk-slim as build

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. Gradle 관련 파일 먼저 복사 (빌드 캐싱 최적화)
COPY gradlew gradlew.bat build.gradle settings.gradle ./
COPY gradle gradle

# 4. Gradle 실행 권한 부여
RUN chmod +x gradlew

# 5. 의존성만 먼저 다운로드하여 캐싱 유지
RUN ./gradlew dependencies --no-daemon

# 6. 전체 프로젝트 복사 후 빌드 실행
COPY . .
RUN ./gradlew clean build -x test --no-daemon

# 7. 실행 스테이지 (최종 JAR 실행)
FROM openjdk:17-jdk-slim
WORKDIR /app

# 8. 빌드된 JAR 파일만 복사
COPY --from=build /app/build/libs/*.jar app.jar

# 9. Spring Boot 실행
ENTRYPOINT ["java", "-jar", "app.jar"]