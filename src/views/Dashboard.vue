<template>
    <div v-if="isSubscribed">
        <Quota :user="this.user" />
    </div>
    <div v-if="isSubscribed == false">
        <Subscribe :userId="this.user != null ? this.user.user_id : ''" />
    </div>
</template>

<script>
import Api from '@/services/api'
import Ethers from '@/services/ethers'
import Quota from '@/components/Quota.vue'
import Subscribe from '@/components/Subscribe.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Dashboard",
    data() {
        return {
            api: null,
            ethers: null,
            user: null,
            isSubscribed: false,
        }
    },
    components: {
        Quota,
        Subscribe,
    },
    async mounted() {
        const token = localStorage.getItem('token');
        const api = new Api();
        this.api = api;
        const user = await api.getUser(token);
        console.log(user)
        this.user = user;
        console.log(this.user.user_id)

        const ethers = new Ethers();
        this.ethers = ethers;
        await ethers.connect();
        const isSubscribed = await ethers.isSubscribed(this.user.user_id);
        this.isSubscribed = isSubscribed;
        console.log("us sub: ", isSubscribed)
    }
}
</script>