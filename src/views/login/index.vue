<template>
  <el-container class="login_wrap">
    <el-header class="head">
      <el-row>
        <el-col :span="2" class="title"><span>admin</span></el-col>
        <el-col :span="22" class="menu">
          <el-button type="primary">登录</el-button>
          <el-button type="primary" plain style="padding:0;">
            <router-link to="/regist" class="regist">
              <span>注册</span>
            </router-link>
          </el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div class="list">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link to="/city" class="list">
        <span>北京</span>
        <i class="el-icon-arrow-right" />
      </router-link>
      <section>
        <h4 style="height:30px;line-height:30px;border-bottom:1px solid #dcdfe6;font-weight: 700;">热门城市</h4>
        <ul style="overflow:hidden;">
          <router-link v-for="item in citys" tag="li" to="/city" class="host_city">
            <span>{{ item.name }}</span>
          </router-link>
        </ul>
      </section>
      <section>
        <ul class="city_wrap">
          <li v-for="(value, key, index) in sortgroupcity" :key="key" class="list_block">
            <h4>{{ key }} <span v-if="index == 0" class="title">(按字母排序)</span></h4>
            <ul class="list_line">
              <router-link v-for="list in value" :key="list.id" tag="li" to="/city" class="host_city">
                <span>{{ list.name }}</span>
              </router-link>
            </ul>
          </li>
        </ul>
      </section>
    </el-main>
  </el-container>
</template>
<script>
import { getcitys, getcityList } from '@/api/login'
export default {
  name: 'Login',
  data() {
    return {
      citys: [],
      cityList: [],
      loginForm: {

      }

    }
  },
  computed: {
    // 将获取的数据按照A-Z字母开头排序
    sortgroupcity() {
      const sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.cityList[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.cityList[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  },

  created() {
    this.getcity()
    this.getcityList()
  },
  mounted() {

  },
  methods: {
    getcity() {
      getcitys().then(response => {
        if (response) {
          this.citys = response
        } else {
          this.citys = []
        }
      }).catch(error => {
        this.citys = []
      })
    },
    getcityList() {
      getcityList().then(response => {
        if (response) {
          this.cityList = response
        } else {
          this.cityList = []
        }
      }).catch(error => {
        this.cityList = []
      })
    }

  }
}
</script>
<style lang="scss" scoped>
  .login_wrap{
    background:#fff;
  }
  .regist{
    display:inline-block;
    padding:10px 20px;
  }
  .citys{
    background:#F5F5F5;
  }
  .head{
    .title{
      text-align: left;
    }
    .menu{
      text-align: right;
      font-size: 12px;
    }
  }
  .list{
    height:40px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    border-bottom: 1px solid #dcdfe6;
  }

  .el-header {
    color: #333;
    line-height: 60px;
    border-bottom: 1px solid #dcdfe6;
  }
  .host_city{
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 25%;
    height: 3rem;
    font: .9rem/3 Microsoft YaHei;
    cursor:pointer;

  }
  .city_wrap{
    .title{
      font-size: .475rem;
      color: #999;
    }
    .host_city{
      color:#333;
      margin-bottom:10px;
    }
    h4{
      padding:10px 0;
    }
    .list_line{
      width:100%;
      overflow:hidden;
      border-top:1px solid #e4e4e4;
      border-bottom:1px solid #e4e4e4;
    }
  }

</style>
