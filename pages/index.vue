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
            Campaign message. Something about community, Mobile, children,
            families, etc.
          </p>
        </div>
      </div>

      <img class="family-photo" src="../assets/pics/jensen-fam.jpg" />
    </section>

    <section class="personal-bio">
      <p>
        Elit adipisicing sint aute consequat irure et. Tempor ea sint est ea
        incididunt officia. Eu ea proident ipsum dolor mollit et tempor et anim
        mollit proident. Velit ex adipisicing eiusmod ut nulla laborum dolore
        qui Lorem. Magna cillum pariatur Lorem et consequat aliqua ut et.
        Officia voluptate magna reprehenderit eu labore ipsum tempor sint est
        reprehenderit deserunt sit sint id.
      </p>

      <p>
        Elit adipisicing sint aute consequat irure et. Tempor ea sint est ea
        incididunt officia. Eu ea proident ipsum dolor mollit et tempor et anim
        mollit proident. Velit ex adipisicing eiusmod ut nulla laborum dolore
        qui Lorem. Magna cillum pariatur Lorem et consequat aliqua ut et.
        Officia voluptate magna reprehenderit eu labore ipsum tempor sint est
        reprehenderit deserunt sit sint id.
      </p>
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
  padding-left: 40px;
}

.slogan {
  font-family: 'Arvo', serif;
  font-size: 48px;
  letter-spacing: 1px;
  color: $navyBlue75;
  font-weight: 700;
}

.subhead {
  font-size: 18px;
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

  p {
    font-size: 18px;
    line-height: 20px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 15px;
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
