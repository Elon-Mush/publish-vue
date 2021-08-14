<template>
  <div class="fans-containter">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>粉丝管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-table
      class="table-list"
      :data="fansList"
      style="width: 100%"
      stripe
      >
        <el-table-column prop="date" label="日期" >
        </el-table-column>
        <el-table-column prop="id" label="姓名"  >
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getFansList } from '@/api/fans/'

export default {
  name: 'Fans',
  data () {
    return {
      fansList: []
    }
  },
  created () {
    this.loadFansList()
  },
  mounted () {},
  methods: {
    loadFansList () {
      getFansList().then((res) => {
        this.fansList = res.data.data.result
      })
    }
  }
}
</script>

<style lang='less' scoped>
.table-list {
  margin-bottom: 30px;
}
</style>
