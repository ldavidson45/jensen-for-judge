<script>
import CheckIcon from '~/components/CheckIcon.vue'
export default {
  components: {
    CheckIcon,
  },
  data() {
    return {
      dates: [
        {
          weekday: 'Tues',
          day: 24,
          month: 'May',
          year: 2022,
          name: '2022 Alabama State Primary Election',
        },
        {
          weekday: 'Tues',
          day: 21,
          month: 'Jun',
          year: 2022,
          name: '2022 Primary Runoff Election',
        },
        {
          weekday: 'Tues',
          day: 8,
          month: 'Nov',
          year: 2022,
          name: '2022 General Election',
        },
      ],
      additionalLinks: [
        {
          url: 'https://myinfo.alabamavotes.gov/voterview',
          description: 'Find your polling location',
        },
        {
          url: 'https://myinfo.alabamavotes.gov/voterview',
          description: 'Check your voter registration',
        },

        {
          url: 'https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote',
          description: 'Register to vote',
        },
        {
          url: 'https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting',
          description: 'Absentee voting',
        },
      ],
    }
  },
}
</script>

<template>
  <section class="page">
    <div class="section">
      <h2 class="section__title">Election Information</h2>
      <div class="section__content">
        <div>
          <div v-for="(event, index) in dates" :key="index" class="event">
            <div class="event-date">
              <p class="event-date__dow">{{ event.weekday }}</p>
              <p class="event-date__day">{{ event.day }}</p>
              <p class="event-date__year">{{ event.month }} {{ event.year }}</p>
            </div>
            <div class="event__description">
              <p>{{ event.name }}</p>
            </div>
          </div>
        </div>

        <aside class="sidebar">
          <h3 class="sidebar__title">Additional Resources</h3>
          <ul class="sidebar__list">
            <li
              v-for="(link, index) in additionalLinks"
              :key="`${index}-sidebar`"
            >
              <CheckIcon class="sidebar__icon" />
              <a :href="link.url" target="_blank">{{ link.description }}</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding: 60px;

  &__title {
    font-size: 40px;
    color: $navyBlue75;
    font-family: 'Arvo', serif;
    display: block;
    margin-bottom: 30px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  .sidebar {
    background-color: $lightGray;
    padding: 15px;
    &__title {
      color: $brickRed;
      font-family: 'Barlow';
    }

    &__list {
      font-family: 'Roboto';
      li {
        display: flex;
        line-height: 16px;
        margin: 15px 5px;

        a {
          color: $navyBlue61;
          text-decoration: none;

          &:hover {
            color: $lightBlue1;
          }
        }
      }
    }

    &__icon {
      height: 16px;
      margin-right: 10px;
    }
  }
}

.event {
  display: flex;
  margin-bottom: 20px;
  p {
    margin: 0;
    font-family: 'Roboto';
  }

  &-date {
    background: $lightBlue1;
    padding: 25px;
    color: #fff;
    p {
      text-align: center;
      text-transform: uppercase;
    }

    &__dow,
    &__year {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    &__day {
      font-size: 42px;
    }
  }

  &__description {
    margin-left: 30px;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 870px) {
  .section__content {
    flex-direction: column;
  }

  p {
    line-height: normal;
  }
}
</style>
