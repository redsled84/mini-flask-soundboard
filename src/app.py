from flask import Flask, render_template, url_for
from os import path
import os
app = Flask(__name__)

soundboard = {
  "Damn": "damn",
  "Say What Again": "say_what_again",
  "Here's Johnny": "heres_johnny",
}

@app.route("/")
def index():
  return render_template("index.html", url_for=url_for, soundboard=soundboard)