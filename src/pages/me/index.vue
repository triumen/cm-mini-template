<template>
    <div class="me">
      <div class="user-info">
        <img class="user-img" :src="userInfo.avatarUrl" mode="widthFix">
        <text class="user-name">{{userInfo.nickName}}</text>
      </div>
      <div class="icon-ul">
        <div class="icon-li" v-for="v in iconArr" :key="v">
          <i :class="['iconfont', v]"></i>
          <text class="icon-class">{{v}}</text>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    iconArr: [
      'icon-user',
      'icon-home',
      'icon-heart',
      'icon-heart-fill',
      'icon-right',
      'icon-left',
      'icon-up',
      'icon-down',
      'icon-check',
      'icon-close',
      'icon-check-circle-fill',
      'icon-close-circle-fill',
      'icon-minus-circle-fill',
      'icon-plus-circle-fill',
      'icon-camera-fill',
      'icon-search'
    ]
  }),
  computed: {
    ...mapGetters("userInfo", {
      userInfo: "usreInfo"
    })
  }
};
</script>

<style lang="scss">
@import "../../conmon/scss/base.scss";
.me {
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .user-img {
      width: 100px;
      border-radius: 50%;
    }
    .user-name {
      margin-top: 20px;
    }
  }
  .icon-ul {
    display: flex;
    flex-wrap: wrap;
    .icon-li {
      width: calc(100% / 2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  }
}
</style>
