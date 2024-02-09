import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

function Drum() {
  const pads = [
    {
      key: "Q",
      id: "Heat-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      key: "W",
      id: "Heat-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      key: "E",
      id: "Heat-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      key: "A",
      id: "Heat-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      key: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      key: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      key: "Z",
      id: "Kick-n-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      key: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      key: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      const id = e.key.toUpperCase();
      const audio = document.getElementById(id);
      if (audio) {
        audio.play();
        document.getElementById("display").innerHTML = id;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      {pads.map((pad) => (
        <div
          key={pad.id}
          className="drum-pad"
          id={pad.id}
          onClick={() => {
            const audio = document.getElementById(pad.key);
            audio.play();
            document.getElementById("display").innerHTML = pad.id;
          }}
        >
          {pad.key}
          <audio id={pad.key} src={pad.url} className="clip" />
        </div>
      ))}
    </div>
  );
}

const DrumPad = () => {
  return (
    <div id="box">
      <h1 id="title-drumpad">Drum Machine</h1>
      <div id="drum-machine">
        <Drum />
        <div id="display-box">
          <div id="display"></div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<DrumPad />, document.getElementById("root"));
