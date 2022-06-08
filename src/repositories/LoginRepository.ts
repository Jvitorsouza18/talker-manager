export interface ILoginRepository {
  GenerateToken(): Promise<string>;
}
