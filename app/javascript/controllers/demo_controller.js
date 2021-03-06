import { Controller } from "@hotwired/stimulus"
import createDemoChannel from "../channels/demo_channel"
import Connection from "./demo_connection"

export default class extends Controller {
  static targets = [ "main", "remote" ]

  constructor(props) {
    console.log("constructor")

    super(props)
    this.connection = new Connection
    this.connection.remoteStreamTarget = this.remoteTarget
    this.channel = createDemoChannel("my-room", this.connection)
  }

  connect() {
    this.getUserMedia()
  }

  getUserMedia() {
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    }).then((stream) => {
      this.connection.localStream = stream
      this.mainTarget.srcObject = stream
      this.channel.send({type: "TOKEN"})
    })
  }

  joinRoom() {
    this.connection.loadStream()
    this.connection.createOffer()
  }
}