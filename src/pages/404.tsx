import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import '../styles/404.scss';
import {  SolidButton } from "../components/buttons";
import { Logo } from "../components/logo/Logo";
import { Socials } from "../components/socials/Socials";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="notfound">
      <Logo />
      <span className="notfound-description">OOPS! PAGE NOT FOUND</span>
      <span className="notfound-status">404</span>
      <SolidButton variant="dark" link="/" stretched>Back to home</SolidButton>

      <Socials className="notfound-links"/>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found 😕</title>
