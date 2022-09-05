import { Grid } from "@mantine/core";
import CommunityDescriptionsCard from "./CommunityDescriptionsCard";

const CommunityDescriptionsList = ({ communityDescriptions }) => {
  return (
    <Grid>
      {communityDescriptions.map((communityDescription, index) => (
        <Grid.Col sm={12} md={6} lg={4} key={"community description" + index}>
          <CommunityDescriptionsCard
            communityDescription={communityDescription}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default CommunityDescriptionsList;
