import crypto from "crypto";

export default class HmacGenerator {
  constructor() {
    this.key = crypto.randomBytes(32); 
  }

  generateHmac(data) {
    const hmac = crypto.createHmac('sha256', this.key);
    hmac.update(data);
    return hmac.digest('hex');
  }

  getKey() {
    return this.key.toString('hex');
  }
}
