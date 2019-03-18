<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <!-- <breadcrumb class="breadcrumb-container"/> -->
    <div class="navbar-title">罐头食品标准数据库管理后台</div>
    <div class="right-menu">
      <span class="role_name">
        {{ todayDate }}
      </span>
      <span class="role_name">
        {{ roleName }}
      </span>
      <span @click="logout">{{ $t('navbar.logOut') }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import moment from 'moment'
const dateMap = {
  0: '日',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六'
}
export default {
  components: {
    // Breadcrumb,
    Hamburger
  },
  data() {
    return {
      roleName: '',
      todayDate: moment().format('YYYY年MM月DD日') + '星期' + dateMap[moment().day()]
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'device'
    ])
  },
  created() {
    this.roleName = this.$store.state.user.name
    console.log('', this.$store.state)
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  background: #f44336;
  color: #9e9e9e;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .navbar-title{
    float: left;
    line-height: 46px;
    height: 100%;
    color: #f4f4f4;
    font-size: 18px;
    font-weight: 600;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    color: #f4f4f4;
    margin-right: 20px;
    .role_name {
      margin-right: 20px;
    }
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
  }
}
</style>
