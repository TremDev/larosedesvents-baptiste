import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../Components";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import "./index.scss";
import ButtonMenu from "../../Components/Button/Menu/ButtonMenu";
import Logo from '../../assets/logo/logo-minimal-noir.svg'

const Header = (props) => {
  const { tabs } = props;
  const [isOpen, setIsOpen] = useCycle(false, true);

  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        y: { stiffness: -1000, velocity: -100 },
      },
    },
    closed: {
      y: "-100vh",
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const variantsFull = {
    close: {
      y: "-100%",
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: { type: "tween", delay: 0.35, duration: 1 },
    },
    open: {
      opacity: 1,
      backdropFilter: "blur(10px)",
      transition: { type: "tween", duration: 1 },
    },
  };

  const variantsUl = {
    open: {
      transition: {
        type: "spring",
        staggerChildren: 0.26,
        delayChildren: 1.32,
      },
    },
    closed: {
      transition: { staggerChildren: 0.35 },
    },
  };

  const variantsLi = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: -1000, velocity: -500, duration: 0.5 },
      },
    },
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        y: { stiffness: -5000, duration: 0.3 },
      },
    },
  };

  return (
    <header>
      <nav className="top-nav">
        <div className="logo">
          <img src={Logo} alt="logo" className="filter" />
        </div>
        <div className="toggle-button">
          <DarkMode />
          <ButtonMenu onClick={() => setIsOpen(!isOpen)} label={"Menu"} />
        </div>
      </nav>
      <AnimatePresence>
        <motion.div initial={false}>
          <motion.div variants={variants} animate={isOpen ? "open" : "closed"}>
            <motion.nav className="full-nav">
              <motion.div
                variants={variantsFull}
                className="overlay"
              ></motion.div>
              <motion.ul variants={variantsUl}>
                {tabs?.map((o, idx) => (
                  <motion.li variants={variantsLi} key={`links-tab_${idx}`}>
                    <Link to={o?.href} onClick={() => setIsOpen(false)}>
                      {o?.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </header>
  );
};

export default Header;
