import ReactPDF, {
  Page,
  Text,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  body: {
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

function PDFFile() {
  return (
    <Document pdfVersion="1.3">
      <Page style={styles.body} size="A4">
        <Text style={styles.header} fixed>
          dsds
        </Text>

        <Text style={styles.text}>
          Oh right. I forgot about the battle. Wow, you got that off the
          Internet? In my day, the Internet was only used to download
          pornography. I dont know what you did, Fry, but once again, you
          screwed up! Now all the planets are gonna start cracking wise about
          our mamas. She also liked to shut up! Well go deliver this crate like
          professionals, and then well go home. In your time, yes, but nowadays
          shut up! Besides, these are adult stemcells, harvested from perfectly
          healthy adults whom I killed for their stemcells. And Im his friend
          Jesus. Incidentally, you have a dime up your nose. Oh, youre a dollar
          naughtier than most. Bender, being God isnt easy. If you do too much,
          people get dependent on you, and if you do nothing, they lose hope.
          You have to use a light touch. Like a safecracker, or a pickpocket.
          And why did I have to take a cab? Perhaps, but perhaps your
          civilization is merely the sewer of an even greater society above you!
          Why would a robot need to drink? Stop! Dont shoot fire stick in space
          canoe! Cause explosive decompression! Im sure those windmills will
          keep them cool. No! I want to live! There are still too many things I
          dont own! Now that the, uh, garbage ball is in space, Doctor, perhaps
          you can help me with my sexual inhibitions? I feel like I was mauled
          by Jesus. Anyhoo, your net-suits will allow you to experience Frys
          worm infested bowels as if you were actually wriggling through them.
          Bender, I didnt know you liked cooking. Thats so cute. Who am I making
          this out to? Aww, its true. Ive been hiding it for so long. Are you
          crazy? I cant swallow that. Bite my shiny metal ass. Leelas gonna kill
          me. You know, I was God once. There, now hes trapped in a book I
          wrote: a crummy world of plot holes and spelling errors! Yes! In your
          face, Gandhi! This is the worst kind of discrimination: the kind
          against me! No, Im Santa Claus! You are the last hope of the universe.
          I am the man with no name, Zapp Brannigan! Why would I want to know
          that? I guess if you want children beaten, you have to do it yourself.
          Oh, I think we should just stay friends. No, just a regular mistake.
          Im Santa Claus! And then the battles not so bad? I daresay that Fry
          has discovered the smelliest object in the known universe! No! The
          kind with looting and maybe starting a few fires! Bender, quit
          destroying the universe! So, how bout them Knicks? Yes! In your face,
          Gandhi! For one beautiful night I knew what it was like to be a
          grandmother. Subjugated, yet honored. Bite my shiny metal ass. You
          know the worst thing about being a slave? They make you work, but they
          dont pay you or let you go. Theres no part of that sentence I didnt
          like! And when we woke up, we had these bodies. Oh sure! Blame the
          wizards! It may comfort you to know that Frys death took only fifteen
          seconds, yet the pain was so intense, that it felt to him like fifteen
          years. And it goes without saying, it caused him to empty his bowels.
          You guys arent Santa! Youre not even robots. How dare you lie in front
          of Jesus? Hey, whatcha watching? No, I Santa Claus! If rubbin frozen
          dirt in your crotch is wrong, hey I dont wanna be right. Oh, youre a
          dollar naughtier than most. Then well go with that data file! Fry, we
          have a crate to deliver. And why did I have to take a cab? I guess if
          you want children beaten, you have to do it yourself. Say it in
          Russian! Anyhoo, your net-suits will allow you to experience Frys worm
          infested bowels as if you were actually wriggling through them. And Im
          his friend Jesus. Now what? Your best is an idiot! Quite possible. We
          live long ancelebrated poopers. Switzerland is small and neutral! We
          are more like Germany, ambitious and misunderstood! I guess because my
          parents keep telling me to be more ladylike. As though! You know the
          worst thing about being a slave? They make you
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
}

const PDFView = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFViewer style={{ height: "100vh", width: "100vw" }}>
      <PDFFile />
    </PDFViewer>
  );
};

export default PDFView;
