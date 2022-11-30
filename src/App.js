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
      <h1>TCT Advent Calendar 2022</h1>
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
        number='3' 
        date='2022-12-03'
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
        number='4' 
        date='2022-12-04'
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
        number='5' 
        date='2022-12-05'
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
        number='6' 
        date='2022-12-06'
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
        number='7' 
        date='2022-12-07'
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
        number='8' 
        date='2022-12-08'
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
        number='9' 
        date='2022-12-09'
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
        number='10' 
        date='2022-12-10'
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
        number='11' 
        date='2022-12-11'
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
        number='12' 
        date='2022-12-12'
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
        number='13' 
        date='2022-12-13'
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
        number='14' 
        date='2022-12-14'
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
        number='15' 
        date='2022-12-15'
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
        number='16' 
        date='2022-12-16'
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
        number='17' 
        date='2022-12-17'
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
        number='18' 
        date='2022-12-18'
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
        number='19' 
        date='2022-12-19'
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
        number='20' 
        date='2022-12-20'
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
        number='21' 
        date='2022-12-21'
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
        number='22' 
        date='2022-12-22'
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
        number='23' 
        date='2022-12-23'
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
        number='24' 
        date='2022-12-24'
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
        number='25' 
        date='2022-12-25'
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
      <h5>Send proof of you completing challenges to: rachelfletcheremail@gmail.com to be entered into the raffle for a prize. Each completed challenge is one entry!</h5>
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
        <Modal.Body>
          <h4>Challenge Day {day}</h4>
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
