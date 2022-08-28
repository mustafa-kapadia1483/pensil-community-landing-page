import { FileInput, Grid, Textarea, TextInput } from "@mantine/core";
import { useContext } from "react";
import {
  BrandFacebook,
  BrandInstagram,
  BrandLinkedin,
  BrandYoutube,
} from "tabler-icons-react";

import getUpdatedClonedPageObject from "../../helpers/getUpdatedClonedPageObject";
import { Context } from "../../state/Context";

const CommunityOwnerInput = () => {
  const { pageInformation, setPageInformation } = useContext(Context);
  const { communityOwner } = pageInformation;
  const { socialMediaLinks } = communityOwner;

  const inputChangeHandler = e => {
    const { id, value } = e.target;
    setPageInformation(
      getUpdatedClonedPageObject(pageInformation, "communityOwner", id, value)
    );
  };

  const socialMediaLinkHandler = e => {
    const { id, value } = e.target;
    const updatedSocialMediaLinks = structuredClone(socialMediaLinks);
    updatedSocialMediaLinks[id] = value;
    setPageInformation(
      getUpdatedClonedPageObject(
        pageInformation,
        "communityOwner",
        "socialMediaLinks",
        updatedSocialMediaLinks
      )
    );
  };

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <FileInput label="Owner Image" />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label="Owner Name"
            id="communityOwnerName"
            value={communityOwner.communityOwnerName}
            onChange={inputChangeHandler}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            placeholder="Start typing here..."
            label="Owner Bio:"
            id="communityOwnerBio"
            value={communityOwner.communityOwnerBio}
            onChange={inputChangeHandler}
            autosize
            minRows={3}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            icon={<BrandYoutube />}
            id="youtubeChannelLink"
            value={socialMediaLinks.youtubeChannelLink}
            onChange={socialMediaLinkHandler}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            icon={<BrandInstagram />}
            id="instagramLink"
            value={socialMediaLinks.instagramLink}
            onChange={socialMediaLinkHandler}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            icon={<BrandFacebook />}
            id="facebookLink"
            value={socialMediaLinks.facebookLink}
            onChange={socialMediaLinkHandler}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            icon={<BrandLinkedin />}
            id="linkedinLink"
            value={socialMediaLinks.linkedinLink}
            onChange={socialMediaLinkHandler}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default CommunityOwnerInput;
