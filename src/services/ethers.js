const ethers = require('ethers');

const relayerSubscriptionAbi = require("@/abis/relayerSubscription.json");

class Ethers {
    constructor() {
        const provider = new ethers.providers.Web3Provider(window.lukso);
        this.provider = provider
        this.signer = this.provider.getSigner();

        this.relayerSubscription = new ethers.Contract(process.env.VUE_APP_ADDRESS, relayerSubscriptionAbi, this.signer);
    }

    connect = async function () {
        try {
            await this.provider.send("eth_requestAccounts", []);
            this.address = await this.signer.getAddress();
        } catch(error) {
            console.log(error)
        }
    }

    subscribe = async function(userId) {
        console.log(userId)
        const amount = await this.relayerSubscription.subscriptionPrice();
        //let amountWei = ethers.utils.parseEther(amount.toString());
        console.log(amount.toString())
        try {
            const tx = await this.relayerSubscription.subscribe(userId)
            await tx.wait();
            return true;
        } catch(err) {
            console.log(err.reason);
            alert(err.reason);
            return false;
        }
    }

    isSubscribed = async function(userId) {
        try {
            const isUserSubscribed = await this.relayerSubscription.isSubscribed(userId);
            return isUserSubscribed;
        } catch(error) {
            console.log(error.reason);
            return error.reason;
        }
    }
}

export default Ethers