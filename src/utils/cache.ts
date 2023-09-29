export class CacheUtil {
  public cache: any;
  constructor() {
    this.cache = {};
  }

  private isExpired(obj: any, expirationTime: number): boolean {
    if (!obj || obj.length < 1) return true;
    const currentTime = Date.now();
    const { expiration } = obj;
    const expired = currentTime - expiration >= 1000 * 60 * expirationTime;

    return expired;
  }

  public get(key: string, expirationTime = 0.5) {
    if (!this.isExpired(this.cache[key], expirationTime))
      return this.cache[key].value;

    this.cache[key] = null;
    return;
  }

  public set(key: string, value: any) {
    this.cache[key] = { value, expiration: Date.now() };
  }
}
