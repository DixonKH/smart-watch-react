import { promises } from "dns";
import { serverApi } from "../../lib/config";
import { Product, ProductInquery } from "../../lib/types/product";
import axios from "axios";
import {
  LoginInput,
  Member,
  MemberInput,
  MemberUpdateInput,
} from "../../lib/types/member";

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

  public async getAdmin(): Promise<Member> {
    try {
      const url = this.path + "/member/admin";
      const result = await axios.get(url);
      console.log("topUsers: ", result.data);

      const admin: Member = result.data;
      return admin;
    } catch (err) {
      console.log("Error, getTopUsers: ", err);
      throw err;
    }
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("signup: ", result);

      const member: Member = result.data.member;
      console.log("member: ", member);
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error signup: ", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("login: ", result);

      const member: Member = result.data.member;
      console.log("member: ", member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("Error login: ", err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    try {
      const url = this.path + "/member/logout";
      const result = await axios.post(url, {}, { withCredentials: true });
      console.log("logout: ", result);

      localStorage.removeItem("memberData");
    } catch (err) {
      console.log("Error logout: ", err);
      throw err;
    }
  }

  public async updateMember(input: MemberUpdateInput): Promise<Member> {
    try {
      const formData = new FormData();
      formData.append("memberNick", input.memberNick || "");
      formData.append("memberPhone", input.memberPhone || "");
      formData.append("memberAddress", input.memberAddress || "");
      formData.append("memberDesc", input.memberDesc || "");
      formData.append("memberImage", input.memberImage || "");

      const result = await axios(`${serverApi}/member/update`, {
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log("updateMember: ", result);
      const member: Member = result.data;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error updateMember: ", err);
      throw err;
    }
  }
}

export default MemberService;
