<template>
  <div class="root">
    <input type="text" placeholder="Введите Ф.И.О. студента" class="add-input"
           v-model="name" @keypress.enter="add">
    <button class="wide-button" @click="add">Выдать задание</button>
    
    <table v-if="rows.length">
      <thead>
        <tr>
          <th>№</th>
          <th>Ф.И.О. студента</th>
          <th>Вариант задания</th>
          <th>Задание выдано</th>
          <th>Времени осталось</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="(row, index) of rows" :key="row.id">
          <td>{{ index + 1 }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.variant }}</td>
          <td>{{ row.timeSince }}</td>
          <td>{{ formatTime(row.timeLeft) }}</td>
          <td>
            <button class="small-button" @click="remove($event, index)">
              Удалить
            </button>
          </td>
        </tr>
  
        <tr>
          <td colspan="5">
            <button class="small-button" @click="clear">
              Очистить таблицу
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  // Время на выполнение экзаменационной задачи в секундах.
  const examTime = 2 * 60 * 60;
  // Количество вариантов заданий.
  const numberOfVariants = 4;
  
  /**
   * Возвращает случайный вариант задания.
   *
   * @returns {number} Вариант задания.
   */
  const getRandomVariant = () =>
    Math.floor(Math.random() * numberOfVariants + 1);
  
  /**
   * Возвращает текущее время в виде строки формата HH:MM.
   *
   * @returns {string} Текущее время.
   */
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  
  export default {
    name: "exam-table",
    
    data() {
      return {
        intervalId: 0,
        name: "",
        rows: []
      };
    },
    
    methods: {
      add() {
        if(this.name.length) {
          this.rows.push({
            name: this.name,
            variant: getRandomVariant(),
            timeSince: getCurrentTime(),
            timeLeft: examTime
          });
          
          this.name = "";
        }
      },
      remove(event, index) {
        this.rows.splice(index, 1);
      },
      clear() {
        this.rows = [];
      },
      
      /**
       * Возвращает время в виде строки формата HH:MM:SS на основе секунд.
       *
       * @param seconds Секунды.
       * @returns {string} Время.
       */
      formatTime(seconds) {
        if(!seconds) return "-";
        
        const timeLeft = new Date(0, 0, 0, 0, 0, seconds);
        return timeLeft.toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });
      }
    },
    
    mounted() {
      this.intervalId = setInterval(() => {
        for(let row of this.rows) {
          if(row.timeLeft > 0) row.timeLeft--;
        }
      }, 1000);
    },
    
    beforeDestroy() {
      clearInterval(this.intervalId);
    }
  };
</script>

<style scoped>
  .root {
    margin: 1.5rem 0 3rem;
  }
  
  .add-input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid black;
    
    text-align: center;
    font-size: inherit;
    font-family: inherit;
  }
  
  .wide-button {
    display: block;
    width: 100%;
    padding: 0.6rem;
    border-radius: 4px;
    border: none;
    margin: 0.5rem 0;
    
    color: white;
    background: #3eaf7c;
    
    font-weight: bold;
  
    transition: background-color 0.1s ease;
  }
  
  .wide-button:hover {
    background: #4abf8a;
  }
  
  .small-button {
    border: none;
    
    color: #3eaf7c;
    background: none;
  }
  
  .small-button:hover {
    text-decoration: underline #3eaf7c;
  }
  
  .wide-button, .small-button {
    cursor: pointer;
    
    font-size: 16px;
    font-family: inherit;
  }
  
  th, td {
    text-align: center;
  }
</style>