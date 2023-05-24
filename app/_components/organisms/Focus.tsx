import React from "react";
import styles from "./focus.module.scss";
import {
  MdBuild as CraftIcon,
  MdWorkspacePremium as PremiumIcon,
  MdTableRestaurant as StoolIcon,
  MdLocalBar as BarIcon,
  MdPeople as PeopleIcon,
  MdOutlineHandshake as CollaborationIcon,
} from "react-icons/md";

const Focus = () => {
  return (
    <section id="focus" className={styles.focus}>
      <h1>Our Focus Areas</h1>
      <p>We believe these Six pillars strengthen customer experience</p>
      <ul>
        <li>
          <figure>
            <CraftIcon />
          </figure>
          <header>Craftmanship</header>
          <p>
            We show our craftsmanship by highlighting things like our distillery
            and the ingredients that go into our product.
          </p>
        </li>
        <li>
          <figure>
            <PremiumIcon />
          </figure>
          <header>Korean Premium</header>
          <p>
            Our brand mission is to elevate the Korean spirits category, so we
            showcase our products in elevated settings with high-end aesthetics.
          </p>
        </li>
        <li>
          <figure>
            <BarIcon />
          </figure>
          <header>Cocktails</header>
          <p>
            We highlight different cocktails that can be made with our product,
            especially the ones that we serve at our bar.
          </p>
        </li>
        <li>
          <figure>
            <StoolIcon />
          </figure>
          <header>Tokki Bar</header>
          <p>
            We show the interior and use the space as a backdrop for other
            photos because we believe the bar embodies the spirit and feel of
            the brand.
          </p>
        </li>
        <li>
          <figure>
            <PeopleIcon />
          </figure>
          <header>People</header>
          <p>
            Our team is the backbone of our company. We highlight our entire
            team at Tokki Soju, from our distillery members to our bar and
            kitchen staff.
          </p>
        </li>
        <li>
          <figure>
            <CollaborationIcon />
          </figure>
          <header>collaborations</header>
          <p>
            For special edition releases (such as the collaboration rice lager
            with Magpie brewing) we add motion to peak interest.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Focus;
