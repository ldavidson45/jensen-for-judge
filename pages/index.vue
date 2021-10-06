<script>
export default {
  name: 'HomePage',
}
</script>

<template>
  <div class="page-content">
    <section class="above-fold">
      <div class="left-rail">
        <div>
          <h2 class="slogan">Family First.</h2>
          <p class="subhead">
            Every child needs a positive support system in their life. As
            Juvenile Court Judge, Linda's goal will be to strengthen and support
            families to help provide a safe environment for children to succeed.
          </p>
        </div>
      </div>

      <img class="family-photo" src="../assets/pics/jensen-fam.jpg" />
    </section>

    <section class="personal-bio">
      <p class="intro">Dear Mobile voters,</p>

      <p>
        My name is Linda Collins Jensen and I am running for Mobile County
        Juvenile Court District Judge.
      </p>

      <p>
        When Judge Brown told me he was retiring after serving 24 years as
        Juvenile District Court Judge, I knew it would be really hard to fill
        his shoes. As Juvenile Court Judge, I will continue my work to help
        families and children in Mobile.
      </p>

      <p class="main-point">
        I have spent my entire career defending the rights of children an
        families.
      </p>

      <p>
        As a young attorney, I joined the District Attorney's office and found
        my calling working for the Child Advocacy Center prosecuting child
        physical and sexual abuse.
      </p>

      <p>
        When I left the District Attorney’s Office, I opened my own practice
        focusing on Family and Juvenile Law as well as criminal defense. The
        most rewarding part of my practice was working with children in the
        Juvenile Court as their Guardian ad Litem.
      </p>

      <p>
        I learned from listening to my young clients that no matter how bad a
        child’s home life was, they wanted nothing more than to be with their
        parent. Even when this is not possible, I know that every child needs
        positive adult role models in their life.
      </p>

      <p>
        If the family can’t provide that then it’s up to us as a community to
        make sure someone is in that child’s life to make sure he or she does
        not fail.
      </p>

      <p class="main-point">I am a firm believer in mentoring.</p>

      <p>
        When I was appointed by Judge Naman to serve as Juvenile Court Referee
        in 2010 I started a group mentoring program for at risk girls.
      </p>
      <p>
        The Girls Leadership Program is a 12-week program aimed at introducing
        girls to positive role models from this community. The mentors provide
        support and advice to the girls in a nonjudgmental loving environment.
      </p>

      <p>
        I am also a huge supporter of the NEST program, which provides one on
        one mentoring from a group of dedicated volunteers.
      </p>
      <p class="main-point">
        As Juvenile Court District Judge I will continue to promote innovative
        programs to help our most vulnerable citizens.
      </p>
      <p>
        The Juvenile Court is the most important Court in the County in that we
        have an opportunity to make real changes in the lives of children and
        families.
      </p>

      <p class="sign-off">Thank you for your support,</p>
      <p class="sign-off signature">Linda Collins Jensen</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.above-fold {
  overflow: hidden;
  position: relative;
  display: flex;
  max-width: 1500px;
  margin: auto;
}

.above-fold::before {
  content: '';
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: linear-gradient(
    to right,
    rgb(255, 255, 255) 34%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 57%
  );
}

.left-rail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 35%;
  z-index: 3;
  padding: 30px;
  padding-left: 60px;
}

.slogan {
  font-family: 'Arvo', serif;
  font-size: 48px;
  letter-spacing: 1px;
  color: $navyBlue75;
  font-weight: 700;
}

.subhead {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  line-height: 28px;
  letter-spacing: 1.2px;
}

.family-photo {
  position: relative;
  width: 70%;
  height: auto;
  margin: auto 0 auto auto;
}

.personal-bio {
  padding: 30px;
  max-width: 900px;
  margin: auto;
  color: $navyBlue75;

  .intro {
    font-size: 38px;
    color: $navyBlue75;
    padding-left: 0;
  }

  .sign-off {
    font-size: 24px;
  }

  .signature {
    font-family: 'Homemade Apple', cursive;
    font-size: 34px;
  }

  p {
    font-size: 18px;
    line-height: 28px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 15px;
    padding-left: 20px;
  }

  .main-point {
    font-size: 30px;
    line-height: 34px;
    color: $brickRed;
  }
}

@media only screen and (max-width: 750px) {
  .above-fold {
    flex-direction: column-reverse;
    width: 100vw;

    &:before {
      content: none;
    }
  }

  // This is basically just here to make the family pic take up less vertical space
  .page-content {
    transform: translateY(-5%);
  }

  .family-photo {
    width: 110%;
    transform: translateX(-8%);
  }

  .left-rail {
    width: 100vw;
    padding: 20px;
  }
}
</style>
