import { promises } from "dns";
import { serverApi } from "../../lib/config";
import { Product, ProductInquery } from "../../lib/types/product";
import axios from "axios";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("topUsers: ", result.data);

      return result.data;
    } catch (err) {
      console.log("Error, getTopUsers: ", err);
      throw err;
    }
  }
}

export default MemberService;
