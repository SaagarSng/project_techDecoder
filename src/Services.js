import React from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import digitalMarketingImage from "./images/digitalMarketing.png";
import webDesignImage from "./images/WebDevelopment.png";
import graphicDesignImage from "./images/graphicDesigner.jpg";
import marketAnalysisImage from "./images/market analysis.jpg";

const StyledCard = styled(Card)`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardContent = styled(CardContent)`
  padding: 24px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 16px;
  font-weight: bold;
  color: #333;
`;

const StyledDescription = styled(Typography)`
  color: #666;
  line-height: 1.5;
`;

const ServicesData = [
  // Services data here...
  {
    imgsrc: digitalMarketingImage,
    title: "Digital Marketing",
    description:
      "Tech Decoder excels in digital marketing strategy and consulting in Nepal. Our expert team crafts tailored plans for business success in the online realm. With local market expertise, we optimize your online presence for tangible results. Get in touch for your Nepal digital marketing needs.",
  },
  {
    imgsrc: webDesignImage,
    title: "Web Design",
    description:
      "TechDecoder provides unique web designs tailored to your requirements. We assess needs, define scope, design sitemaps, wireframes, and content, ensuring a fantastic, smooth, and user-friendly experience. Our expertise in web development meets all your requirements with appealing design and tailored functionality.",
  },
  {
    imgsrc: graphicDesignImage,
    title: "Graphic Design",
    description:
      "At TechDecoder, our skilled graphic designers create visually appealing visuals that captivate your target audience. We offer exceptional designs that meet your needs, showcasing your brand's personality and effectively communicating your ideas. Trust us as Nepal's leading graphic design firm for high-quality, top-notch designs.",
  },
  {
    imgsrc: marketAnalysisImage,
    title: "Market Analysis",
    description:
      "Introducing our comprehensive Market Analysis service at Tech Decoder Nepal, designed to be your strategic compass in the ever-evolving business landscape. With our service, empower decisions, decode market intricacies, and navigate challenges. Whether entering new markets or optimizing presence, thrive with actionable intelligence from Tech Decoder Nepal.",
  },
  {
    imgsrc: marketAnalysisImage,
    title: "Market Analysis",
    description:
      "Introducing our comprehensive Market Analysis service at Tech Decoder Nepal, designed to be your strategic compass in the ever-evolving business landscape. With our service, empower decisions, decode market intricacies, and navigate challenges. Whether entering new markets or optimizing presence, thrive with actionable intelligence from Tech Decoder Nepal.",
  },
  {
    imgsrc: marketAnalysisImage,
    title: "Market Analysis",
    description:
      "Introducing our comprehensive Market Analysis service at Tech Decoder Nepal, designed to be your strategic compass in the ever-evolving business landscape. With our service, empower decisions, decode market intricacies, and navigate challenges. Whether entering new markets or optimizing presence, thrive with actionable intelligence from Tech Decoder Nepal.",
  },
];

const Services = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {ServicesData.map((val, ind) => (
          <Grid item xs={12} sm={6} md={4} key={ind}>
            <StyledCard>
              <StyledCardContent>
                <img
                  src={val.imgsrc}
                  alt={val.title}
                  style={{ marginBottom: "16px", width: "100%" }}
                />
                <StyledTypography variant="h6" gutterBottom>
                  {val.title}
                </StyledTypography>
                <StyledDescription variant="body2">
                  {val.description}
                </StyledDescription>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
