import * as React from "react";
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiBook,
  FiBarChart2
} from "react-icons/fi";
import { VStack, Heading, Box, Link, LinkProps } from "@chakra-ui/react";
import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "./page-transitions";
import { Link as NavLink } from "react-router-dom";
import Header from "./header";

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link href={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link as={NavLink} to={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};
const Achievements = () => {
  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FiBook}> Graduates(soon)</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published 3 blog posts
            </TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{" "}
              <InternalLink
                color={"blue.200"}
                url="/open-source"
                text={"9 open-source repositories"}
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              Collected 2k+ post views and 350+ total reactions on{" "}
              <ExternalLink
                color={"blue.200"}
                url="https://reddit.com/user/snow-blade"
                text={"Reddit"}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Rebuilt my portfolio website with React, ChakraUI and
              Framer-motion,{" "}
              <ExternalLink
                color={"blue.200"}
                url=""
                text={"source on Github"}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Rebuilt my blog with jekyll</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{" "}
              <ExternalLink
                color={"blue.200"}
                url="https://github.com/snow-blade?tab=repositories"
                text={"20+ open-source repositories"}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>Publish 7+ Blog posts
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Built my blog using next.js
            </TimelineItem>
          </Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2019
          </Heading>

          <TimelineItem icon={FiBarChart2}> Contribute to my firsts Open Source Repositories
            </TimelineItem>

          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2018
          </Heading>

          <TimelineItem icon={FiBarChart2}> Starts my coding journey
            </TimelineItem>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;
