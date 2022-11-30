import { useState } from 'react';
import './App.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [day, setDay] = useState(0);
  const [joke, setJoke] = useState("");
  const [jokeAnswer, setJokeAnswer] = useState("");
  const [challenge, setChallenge] = useState("");

  return (
    <>
    <Challenge show={modalShow} onHide={() => setModalShow(false)} day={day} challenge={challenge} joke={joke} jokeAnswer={jokeAnswer}/>    
    <main>      
      <h1 className="header">Activity Advent</h1>
      <h5 className="info">Send a photo to Rachel - 07812278744 you will be entered into a raffle for a prize. Each activity is one entry!</h5>
      <Door 
        number='1' 
        date='2022-11-30'
        challenge="Decorate your bedroom/house with Christmas decorations - Lots of glitter and lights"
        joke="Why was the little boy so cold on Christmas morning?"
        jokeAnswer="Because it was Decembrrrrr!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
      <Door 
        number='2' 
        date='2022-12-02'
        challenge="Research Christmas traditions in other

        countries
        
        - Did I see Christmas dinner on the
        
        beach?"
        joke="What do you call Santa when he stops moving?"
        jokeAnswer="Santa Pause."
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
      <Door 
        number='3' 
        date='2022-12-03'
        challenge="Go Ice – Skating
        - Remember your gloves"
        joke="What reindeer game do reindeer play at
        sleepovers?"
        jokeAnswer="Truth or deer."
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
      <Door 
        number='4' 
        date='2022-12-04'
        challenge="Snuggle up and watch a Christmas

        movie
        
        - Grab those blankets and hot
        
        drinks"
        joke="What’s every elf’s favourite type of music?"
        jokeAnswer="Wrap!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
      <Door 
        number='5' 
        date='2022-12-05'
        challenge="Make a Christmas ornament
        - Make a Santa? Elf? Snowman?
        - With Clay? Paper? Socks?"
        joke="What’s the absolute best Christmas present?"
        jokeAnswer="A broken drum — you can’t beat it!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
      <Door 
        number='6' 
        date='2022-12-06'
        challenge="Write a poem"
        joke="What’s red and white, red and white, red and
        white?"
        jokeAnswer="Santa Claus rolling down the hill."
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='7' 
        date='2022-12-07'
        challenge="Complete the Christmas quiz
        - Test your knowledge"
        joke="How do elves respond when Santa takes
        attendance?"
        jokeAnswer="“Present!”"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='8' 
        date='2022-12-08'
        challenge="Wear a Christmas jumper"
        joke="How do the elves clean Santa&#39;s sleigh on the day
        after Christmas?"
        jokeAnswer="They use Santa-tizer."
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='9' 
        date='2022-12-09'
        challenge="Make a Christmas card and send it
        - Family, friend or someone in your
        
        community"
        joke="What goes “Oh, Oh, Oh”?"
        jokeAnswer="Santa walking backward!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='10' 
        date='2022-12-10'
        challenge="Check out a Christmas market near you
        - A chance for a hot chocolate"
        joke="Why did no one bid for Rudolph and Blitzen on
        eBay?"
        jokeAnswer="Because they were two deer!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='11' 
        date='2022-12-11'
        challenge="How many words can you make out of the word Christmas?"
        joke="Why is it getting harder to buy Advent calendars?"
        jokeAnswer="Their days are numbered!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='12' 
        date='2022-12-12'
        challenge="Build a Christmas scene
        - With Lego or boxes
        - Be creative"
        joke="How did Scrooge win the football game?"
        jokeAnswer="The ghost of Christmas passed!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='13' 
        date='2022-12-13'
        challenge="Donate old toys or clothes to charity"
        joke="Who hides in the bakery at Christmas?"
        jokeAnswer="A mince spy!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='14' 
        date='2022-12-14'
        challenge="Listen to some Christmas music
        - Have a little boogie"
        joke="How do snowmen get around?"
        jokeAnswer="They ride an icicle!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='15' 
        date='2022-12-15'
        challenge="Bake Christmas cookies or a
        gingerbread house
        - Decorate with lots of sweets"
        joke="What is Santa&#39;s dog&#39;s name?"
        jokeAnswer="Santa Paws!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='16' 
        date='2022-12-16'
        challenge="Complete a puzzle"
        joke="How do you help someone who has lost their
        Christmas spirit?"
        jokeAnswer="Nurse them back to elf."
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='17' 
        date='2022-12-17'
        challenge="Go on a winter walk
        - Go at night to enjoy the effect of
        
        the Christmas lights"
        joke="What do you get when you combine a Christmas
        tree with an iPad?"
        jokeAnswer="A pineapple!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='18' 
        date='2022-12-18'
        challenge="Play some sports

        - Go for a walk, kick a ball or play
        
        some E-sports"
        joke="What did one snowman say another snowman?"
        jokeAnswer="You’re cool."
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='19' 
        date='2022-12-19'
        challenge="Make a snow globe"
        joke="Why wouldn’t the cat climb the Christmas tree?"
        jokeAnswer="It was afraid of the bark."
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='20' 
        date='2022-12-20'
        challenge="Play a board game"
        joke="How did the reindeer know it was going to rain?"
        jokeAnswer="Because Rudolph the red-knows-rain, deer!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='21' 
        date='2022-12-21'
        challenge="Have a snowball fight
        - Use marshmallows or rolled up
        
        socks"
        joke="What did one snowman say to the other
        snowman?"
        jokeAnswer="Do you smell carrots?"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='22' 
        date='2022-12-22'
        challenge="Christmas party games"
        joke="What does an elf study in school?"
        jokeAnswer="The elf-abet."
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='23' 
        date='2022-12-23'
        challenge="Don’t forget to wrap your presents
        - There’s probably one hiding that
        
        needs wrapping"
        joke="What do you get when Santa becomes a
        detective?"
        jokeAnswer="Santa CLUES!"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='24' 
        date='2022-12-24'
        challenge="Take time for yourself
        - Enjoy a bubble bath
        - Do something you enjoy and is
        
        calming"
        joke="What comes at the end of Christmas Day?"
        jokeAnswer="The letter “Y!”"
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
        <Door 
        number='25' 
        date='2022-12-25'
        challenge="Have a merry Christmas and enjoy your day with family and friends and with lots of laughter"
        joke=""
        jokeAnswer=""
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        setDay={setDay}        
        setChallenge={setChallenge}
        setJoke={setJoke}        
        setJokeAnswer={setJokeAnswer}
        />
    </main>
    </>
  );

  function Door({ number, date, challenge, joke, jokeAnswer, modalShow, setModalShow, setDay, setJoke, setChallenge }) {    
    const [isEnabled] = useState(IsPastDate(date));
    return (
    <>  
      <article className={isEnabled ? "present" : "present_disabled"} onClick={() => { 
            if (isEnabled){
              setDay(number)    
              setModalShow(!modalShow) 
              setJoke(joke)
              setJokeAnswer(jokeAnswer)
              setChallenge(challenge)
            }
          }
        }>
        
        <div className={isEnabled ? "present__pane" : "present__pane_disabled"}>
          <h2 className={isEnabled ? "present__date" : "present__date_disabled"}>{number}</h2>
        </div>
        <div className={isEnabled ? "present__content" : "present__content_disabled"}> 
          <p className={isEnabled ? "present__inside" : "present__inside_disabled"}>
            Click for activity
          </p>
        </div> 
      </article>
    </> 
    );
  }
  
  function IsPastDate(date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var enabledDay = new Date(date);
    enabledDay.setHours(0, 0, 0, 0);

    return today.getTime() >= enabledDay.getTime();
   
  }
  
  function Challenge(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body className='candycane-border'>
          <h4>Activity {day}</h4>
          <h5 className="challenge">
            {challenge}
          </h5>
          <h5 className="joke">
            {joke}
          </h5>
          <h5 className="jokeAnswer">
            {jokeAnswer}
          </h5>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Body>
      </Modal>
    );
  }  
}

export default App;
