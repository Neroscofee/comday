<template>
  <div class="container">
    <div class="name">{{ myName }}</div>
    <div class="days">距离领证: {{ timer }}</div>
    <div class="name">{{ herName }}</div>
    <!-- <img class="heart" src="/src/assets/logo.png" /> -->
    <img alt="Vue logo" src="../static/heart.png" />
    <!-- <div class="timer">{{ timer }}</div> -->
    <!-- <div class="timer">倒计时: {{ countdown }}</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      myName: '鲤鱼',
      herName: '树',
      startDate: new Date('2021/07/26 22:00:00'), // 相恋开始日期
      days: 0, // 相恋天数
      timer: '', // 计时器
      futureDate: new Date('2023/05/20 00:00:00'),
    }
  },
  computed: {
    countdown() {
      const now = new Date().getTime()
      const distance = this.futureDate.getTime() - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      return `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`
    },
  },
  mounted() {
    this.calculateDays() // 计算相恋天数
    this.updateTimer() // 更新计时器
    let person = {
      name: 'kk',
      age: 15,
    }
    let someone = { ...person }
    console.log('此时', someone)
    console.table(someone)
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
        const diffMs = this.futureDate - now // 计算时间差的毫秒数
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

.heart {
  width: 200px;
  height: 100px;
}
</style>
