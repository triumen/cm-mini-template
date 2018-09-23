<template>
    <div class="home">
       <text class="title"> {{str}}</text>
    </div>
</template>

<script>
export default {
    async mounted() {
        await this.$wx.login()
        let data =  await this.$wx.getUserInfo()
        this.$store.dispatch('userInfo/setUserInfo', data.userInfo)
        console.log(data)
    },
    data(){
        return {
            str: '超盟金服' 
        }
    }
}
</script>

<style lang="scss">
@import '../../conmon/scss/base.scss';
page {
    height: 100%;
}
.home {
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   .title {
       color: $theme-color;
       font-size: $text-title-size;
   }
}
</style>
