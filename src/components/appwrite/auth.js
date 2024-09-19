import conf from "../../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
          console.log(conf.appwriteUrl);
            
    }

    async createAccount({Email, Password, Name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), Email, Password, Name);
            if (userAccount) {
                // call another method
                return this.login({Email, Password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({Email, Password}) {
        try {
            return await this.account.createEmailPasswordSession(Email, Password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService
