import Head from "next/head";

import {
  Flex,
  IconButton,
  Img,
  useTheme,
  Container,
  Box,
} from "@chakra-ui/react";
// import Container from '@/components/Container'
import Layout from "@/components/Layout";
import CommunityContentLayout from "@/components/Dashboard/CommunityContentLayout";
import CommunityLeftSidebar from "@/components/Dashboard/CommunityLeftSidebar";
import CommunityRightSidebar from "@/components/Dashboard/CommunityRightSidebar";
import CommunityMainContent from "@/components/Dashboard/CommunityMainContent";

function community() {
  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;

  return (
    <div>
      <Head>
        <title>Welcome - Community</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box bg={secondaryBlack["200"]}>
          <Container
            maxW="120em"
            px={{ base: "1rem", lg: "4rem" }}
            bg={secondaryBlack["300"]}
          >
            <CommunityContentLayout>
              <CommunityLeftSidebar />
              <CommunityMainContent />
              <CommunityRightSidebar />
            </CommunityContentLayout>
          </Container>
        </Box>
      </Layout>
    </div>
  );
}

export default community;
