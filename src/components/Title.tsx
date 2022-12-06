const titleText = "\r\n __      __                     .___                 .__   __   .__     \r\n\/  \\    \/  \\  ____  _______   __| _\/  ______  _____  |__|_\/  |_ |  |__  \r\n\\   \\\/\\\/   \/ \/  _ \\ \\_  __ \\ \/ __ |  \/  ___\/ \/     \\ |  |\\   __\\|  |  \\ \r\n \\        \/ (  <_> ) |  | \\\/\/ \/_\/ |  \\___ \\ |  Y Y  \\|  | |  |  |   Y  \\\r\n  \\__\/\\  \/   \\____\/  |__|   \\____ | \/____  >|__|_|  \/|__| |__|  |___|  \/\r\n       \\\/                        \\\/      \\\/       \\\/                 \\\/"
const titleLines = titleText.split("\r\n")

export default function Title() {

  const line1 = (<pre>{titleLines[0]}</pre>)
  const line2 = (<pre>{titleLines[1]}</pre>)
  const line3 = (<pre>{titleLines[2]}</pre>)
  const line4 = (<pre>{titleLines[3]}</pre>)
  const line5 = (<pre>{titleLines[4]}</pre>)
  const line6 = (<pre>{titleLines[5]}</pre>)
  const line7 = (<pre>{titleLines[6]}</pre>)

  return ( <h2>{line1}{line2}{line3}{line4}{line5}{line6}{line7}</h2> )
}