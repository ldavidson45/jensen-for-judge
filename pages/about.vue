<script>
export default {
  name: 'AboutPage',
}
</script>

<template>
  <div class="page">
    <div class="about-intro-container">
      <div class="left-col">
        <h2 class="section-title">Meet Linda</h2>
        <p class="section-text">
          Linda Collins Jensen is a lifelong Mobilian, a community leader, and a
          candidate for Mobile County's Juvenile Court Judge.
        </p>

        <p class="section-text">
          Linda has served as Mobile County's Juvenile Court Referee since 2010.
          Over the past decade in this role, she has dedicated her career to
          helping the youth and families of Mobile. In 2011, Linda founded the
          Mobile County Juvenile Court Girls Leadership Program which is
          designed to provide young women on probation with strong female
          mentorship to help them focus on positive future goals.
        </p>
        <p class="section-text">
          Linda has decades of experience in family and juvenile law. Early in
          her career, she served as a special child abuse prosecutor for the
          Mobile County District Attorney's office. Prior to her appointment as
          Juvenile Court Referee, Linda worked as a private practice lawyer
          focusing on criminal, juvenile, and family law.
        </p>

        <p class="section-text"></p>
      </div>
      <div class="right-col">
        <img src="../assets/pics/linda.jpg" />
      </div>
    </div>

    <div class="section">
      <h2 class="section-title section-title--sm">
        Community Involvement And Organizations
      </h2>

      <ul class="orgs-section">
        <li class="org-item">
          <span class="org-item__role">Program Coordinator</span>
          <h3 class="org-item__org">Girls Leadership Program</h3>
          <p class="org-item__description">
            A group mentoring program designed to help young women on probation
            focus on positive future goals with the help of adult female mentor
            volunteers. As program coordinator, Linda is responsible for
            recruiting and training volunteers, scheduling speakers and
            activities and leading the meetings. Each class meets one night a
            week for 12 weeks in the Fall and in the Spring of every year.
          </p>
        </li>

        <li class="org-item">
          <span class="org-item__role">Organizer & Leader</span>
          <h3 class="org-item__org">
            Mobile County Juvenile Court Sex Trafficking Task Force (JUST)
          </h3>
          <p class="org-item__description">
            Linda founded the JUST team in June of 2021 to identify victims of
            sex trafficking, provide services to the victim and their family and
            to identify and prosecute offenders.
          </p>
        </li>

        <li class="org-item">
          <span class="org-item__role">Member</span>
          <h3 class="org-item__org">Azalea City Republican Women</h3>
          <p class="org-item__description">
            Established in 1974, the Azalea City Republican Women (founded under
            the Alabama Federation of Republican Women) is the oldest existing
            Republican women's group in Mobile County.
          </p>
        </li>

        <li class="org-item">
          <span class="org-item__role">Parishioner</span>
          <h3 class="org-item__org">St. Mary Catholic Church</h3>
          <p class="org-item__description">
            Linda and her husband Brad have been active members of St. Mary
            Catholic Church for over 30 years. All three of their children
            attended St. Mary Catholic Elementary School. During that time,
            Linda acted as a member of St Mary Parish Council and School Board.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-intro-container {
  display: flex;
  padding: 60px;
  background: #fff;

  .left-col {
    width: 66%;
    margin-right: 10px;
  }

  .right-col {
    width: 33%;
    min-width: 400px;
    margin-left: 10px;

    img {
      width: 100%;
    }
  }
}

.section {
  padding: 60px;
}

.section-title {
  font-size: 50px;
  // color: #fff;
  color: $navyBlue75;
  font-family: 'Arvo', serif;

  &--sm {
    font-size: 40px;
  }
}

.section-text {
  font-family: 'Roboto', sans-serif;
  color: $navyBlue75;
  font-size: 20px;
  line-height: 28px;
}

.orgs-section {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.org-item {
  background: $brickRed;
  color: #fff;
  padding: 30px;
  width: 320px;
  margin-bottom: 20px;

  &__role {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    font-size: 12px;
  }

  &__org {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
    margin-top: 10px;
  }

  &__description {
    font-family: 'Roboto', sans-serif;
  }
}

@media only screen and (max-width: 950px) {
  .about-intro-container {
    flex-direction: column;

    .left-col {
      width: auto;
    }
    .right-col {
      margin: auto;
    }
  }

  .section-text {
    font-size: 18px;
    line-height: 24px;
  }
}
</style>
