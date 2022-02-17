class UserService {
    constructor(userClient) {
        this.userClient = userClient;
        this.isLogedIn = false;
    }

    login(id, password) {
        if (!this.isLogedIn) {
            // 주석처리한 아래 코드처럼 fetch를 service안에 넣지 않음 절대!! 네트워크에 의존하기 때문에 단위 테스트가 어렵기 때문
            // 따라서 네트워크 통신을 하는 코드는 별도의 클래스로 분리해서 관리하는 것이 좋음
            //return fetch('http://example.com/login/id+password') //
            // .then((response) => response.json());
            return this.userClient
                .login(id, password) //
                .then((data) => (this.isLogedIn = true));
        }
    }
}

module.exports = UserService;
