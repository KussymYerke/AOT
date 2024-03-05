import videoOne from "@/data/videoOne";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'next/image';
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";
import Instagram from '@/images/blog/insta.png'
// import Instagram from '../../assets/images/blog/insta';
// import Telegram from '../../assets/images/blog/telegram';

const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});

const { bg, videoId, tagline, title, iconBoxes } = videoOne;

const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="video-one">
        <Jarallax className="video-one-bg" speed={0.2} imgPosition="50% 0%">
          <JarallaxImage src={bg.src} />
        </Jarallax>
        <Container>
          <Row>
            <Col xl={6} lg={6}>
              <div className="video-one__left">
                {/* <div className="video-one__video-link">
                  <div
                    style={{ cursor: "pointer", width: "min-content" }}
                    onClick={() => setOpen(true)}
                    className="video-popup"
                  >
                    <div className="video-one__video-icon">
                      <span className="icon-play-button"></span>
                      <i className="ripple"></i>
                    </div>
                  </div>
                </div> */}
                {/* <p className="video-one__tagline">{tagline}</p> */}
                <h2 className="video-one__title">{title}</h2>
                <div className="video-btn">
                  <a href="#" className="about-one__btn thm-pd">
                    Contact us
                  </a>
                  <a href="#" className="about-one__subtn sub-btn">
                    Fill the form
                  </a>
                </div>  
                <div className='social-icons'>
                  <Image src={require("@/images/blog/insta.png")} alt='insta logo'/>
                  <Image src={require("@/images/blog/telegram.png")} alt='insta logo'/>
                  <Image src={require("@/images/blog/whatsapp.png")} alt='insta logo'/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoOne;
