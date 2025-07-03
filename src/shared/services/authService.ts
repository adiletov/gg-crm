class AuthService {
  private static accessTokenKey = 'accessToken';
  private static storage = localStorage;

  static login(token: string, remember: boolean) {
    this.storage = remember ? localStorage : sessionStorage;
    this.storage.setItem(this.accessTokenKey, token);
  }

  static getToken(): string | null {
    return (
      localStorage.getItem(this.accessTokenKey) ||
      sessionStorage.getItem(this.accessTokenKey)
    );
  }

  static logout() {
    localStorage.removeItem(this.accessTokenKey);
    sessionStorage.removeItem(this.accessTokenKey);
  }

  static isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default AuthService;
