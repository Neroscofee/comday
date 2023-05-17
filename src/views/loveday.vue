<template>
  <div class="container">
    <div class="name">{{ myName }}</div>
    <div class="days">我们已经相恋 {{ days }} 天</div>
    <div class="name">{{ herName }}</div>
    <div class="timer">{{ timer }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myName: '帅气大帅哥',
      herName: '秋茶小奶妹',
      startDate: new Date('2021/07/26 22:00:00'), // 相恋开始日期
      days: 0, // 相恋天数
      timer: '', // 计时器
    }
  },
  mounted() {
    this.calculateDays() // 计算相恋天数
    this.updateTimer() // 更新计时器
  },
  methods: {
    calculateDays() {
      const oneDay = 24 * 60 * 60 * 1000 // 一天的毫秒数
      const diffDays = Math.round(
        Math.abs((new Date() - this.startDate) / oneDay)
      ) // 计算相恋天数
      this.days = diffDays
    },
    updateTimer() {
      setInterval(() => {
        const now = new Date() // 当前时间
        const diffMs = now - this.startDate // 计算时间差的毫秒数
        const diffSec = Math.floor(diffMs / 1000) // 转换为秒数
        const sec = diffSec % 60 // 计算剩余的秒数
        const min = Math.floor(diffSec / 60) % 60 // 计算剩余的分钟数
        const hour = Math.floor(diffSec / 3600) % 24 // 计算剩余的小时数
        const day = Math.floor(diffSec / 86400) // 计算剩余的天数
        this.timer = `${day}天 ${hour}小时 ${min}分钟 ${sec}秒`
      }, 1000)
    },
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  margin-top: 100px;
}

.name {
  margin: 20px 0;
}

.days {
  color: red;
}

.timer {
  margin-top: 20px;
}
</style>
