import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Spacer,
  Heading,
  Divider,
  Highlight,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Para = () => {
  return (
    <div>
      <Text
        lineHeight="1.42857143"
        textAlign="left"
        fontSize="18px"
        color="#333"
        marginTop="18px"
      >
        Immerse into the throngs of the rich and vibrant Kumaoni culture as you
        join us on a retreat to a secluded getaway located in the Hariyal
        village of Nainital. Soak in the monsoon vibes, as you watch the clouds
        kissing the hills, sipping on freshly brewed herbal tea. On this Mindful
        Retreat, you will set out on a guided hike through the wilderness to
        gorge on tea and snacks with a gorgeous backdrop of sunset, taste the
        local cuisine, and enjoy funfilled evenings and barbeque nights under
        the starlit sky.
      </Text>
      <Text
        fontWeight="600"
        lineHeight="1.42857143"
        textAlign="left"
        fontSize="18px"
        marginTop="18px"
      >
        The retreat comes with a free one-time rescheduling option. Let us know
        72 hours ahead of the stay and pick another date as per your convenience
        within the next three months.{" "}
      </Text>
      <Text
        fontWeight="600"
        lineHeight="1.42857143"
        textAlign="left"
        fontSize="18px"
        marginTop="18px"
      >
        What you will love:
      </Text>
      <UnorderedList textAlign="left" marginLeft="8%">
        <ListItem>
          Living in a rustic Kumaoni homestay and enjoying the traditional way
          of life in Hariyal
        </ListItem>
        <ListItem>
          Stargazing from the property’s deck crafted specially for the purpose
          of letting travellers become one with the starry sky
        </ListItem>
        <ListItem>
          Rejuvenating activities such as plucking herbs and making your own
          herbal tea or playing badminton and burma bridge, that have you
          revisit the simple pleasures of childlike joy
        </ListItem>
        <ListItem>
          The chance to kickback and relax with the melodious chirping of birds
          and the silence of the forest comforting you
        </ListItem>
        <ListItem>
          A guided hike to explore the dense wilderness in a way that lets the
          nature lover in you rejoice with scenic sunsets
        </ListItem>
      </UnorderedList>
      <Text
        fontWeight="600"
        lineHeight="1.42857143"
        textAlign="left"
        fontSize="18px"
        marginTop="18px"
      >
        Where you'll stay
      </Text>
      <UnorderedList textAlign="left" marginLeft="8%">
        <ListItem>
          You will stay in mud and wooden huts in Once Upon A Forest on a double
          sharing basis.
        </ListItem>
        <ListItem>
          Here in Nainital’s forested regions, the Panchahuli range of the
          Himalayas will play peekaboo with your eyes.
        </ListItem>
        <ListItem>
          Bring your furry friends along for this pet-friendly mountain
          rendezvous.{" "}
        </ListItem>
      </UnorderedList>
      <Text
        fontWeight="600"
        lineHeight="1.42857143"
        textAlign="left"
        fontSize="18px"
        marginTop="18px"
      >
        At the retreat you will experience:
      </Text>
      <UnorderedList textAlign="left" marginLeft="8%">
        <ListItem fontWeight="500">
          Soaking in the quaint village life and embark on wilderness hike
        </ListItem>
        <Text>
          – Enjoy the authentic Kumaoni lifestyle, taste the local delicacies
          and indulge in living the slow life away from the urban chaos.
        </Text>
        <Text>
          – On day two, head for a hike with an expert guide to experience the
          serenity offered by the lush wilderness that cocoons the property.
        </Text>
        <ListItem fontWeight="500">Stargazing into the mountain sky</ListItem>
        <Text>
          – The special stargazing deck lets your mind wander into the realm of
          stars that glitter prettily upon the night sky.
        </Text>
        <Text>
          – With the Panchahuli mountain range standing tall, take in their
          scenic sight along with the astrological marvels.
        </Text>
        <ListItem fontWeight="500"> Lounging back and relaxing</ListItem>
        <Text>
          – Gift your skin a natural spa day with the sunrays softly playing
          with it as you lay about the premises.
        </Text>
        <Text>
          – Play a game of badminton, listen to music or curl up with a book for
          a taste of the much needed nothingness.
        </Text>
      </UnorderedList>
      <Text
        fontWeight="600"
        lineHeight="1.42857143"
        textAlign="left"
        fontSize="18px"
        marginTop="18px"
      >
        Why should you book?
      </Text>
      <UnorderedList textAlign="left" marginLeft="8%">
        <ListItem>Flexible booking</ListItem>
        <ListItem>Rescheduling</ListItem>
        <ListItem>
          Experiencing glamping amidst the peaceful foothills of Uttarakhand
        </ListItem>
      </UnorderedList>
      <Divider marginTop="30px" marginBottom="20px" />
      <Heading as="h4" size="lg" textAlign="left">
        Inclusions
      </Heading>
      <UnorderedList textAlign="left" marginLeft="8%">
        <ListItem>2 nights stay at Once Upon A Forest</ListItem>
        <ListItem>All meals from Day 1 lunch to Day 3 breakfast</ListItem>
        <ListItem>Sunset hike with tea and snacks</ListItem>
      </UnorderedList>
      <Divider marginTop="30px" marginBottom="20px" />
      <Heading as="h4" size="lg" textAlign="left">
        Exclusions
      </Heading>
      <UnorderedList textAlign="left" marginLeft="8%">
        <ListItem>Travel expenses to the location.</ListItem>
        <ListItem>Anything not expressly specified in the Inclusions.t</ListItem>
      </UnorderedList>
    </div>
  );
};

export default Para;
