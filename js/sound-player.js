function getQueryParams(name, url) {
    if (!url)
        url = location.href
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}

function ______SoundPlayer______() { };

function SoundPlayer() {
    this.myAudio = null;

    if (typeof (Audio) != "undefined")
        this.myAudio = new Audio();
    else if (!window.no_audio_alarm_displayed) {//display error msg only one
        window.no_audio_alarm_displayed = true;
        alert('Sorry, cannot play alarm sound. Please upgrade your internet browser, or use Google Chrome. ');
    }

    this.audio_name = "";
    var _this = this;
    var is_playing = false;

    this.AddEvents = function (on_play, on_stop_or_pause, on_play_pos_update) {
        if (this.myAudio == null)
            return;
        if (on_play != null)
            this.myAudio.addEventListener("playing", on_play);
        if (on_stop_or_pause != null) {
            this.myAudio.addEventListener("pause", on_stop_or_pause);
            this.myAudio.addEventListener("ended", on_stop_or_pause);
        }
        if (on_play_pos_update != null) {
            //var pos = this.currentTime;
            //var duration = this.duration;
            this.myAudio.addEventListener('timeupdate', on_play_pos_update);
        }

    }

    //If SetMaxPlayTime is called before this function, then sound may be stopped in event
    this.Play = function (name) {
        if (this.myAudio == null)
            return;
        this.audio_name = name;
        this.myAudio.preload = "auto";
        this.myAudio.src = name;
        this.myAudio.load();
        this.myAudio.play();
    }

    this.Pause = function () {
        if (this.myAudio == null)
            return;
        this.myAudio.pause();
    }

    this.Toggle = function (name) {
        if (this.myAudio == null)
            return;

        if (this.audio_name == name) {
            if (this.myAudio.ended || this.myAudio.paused) {
                if(! this.myAudio.paused)
                    this.myAudio.load();
                this.myAudio.play();
            } else
                this.myAudio.pause();
        } else {
            this.Play(name);
        }
    }

    this.IsPlaying = function()
    {
        return is_playing;
    }

    this.max_play_time = -1;
    //how many seconds the audio should play
    //seconds: -1: loop forever; 0: once; other vlaue:loop until time expires
    this.SetMaxPlayTime = function (seconds) {
        this.max_play_time = seconds;
        this._SetPlayerTimer();
    }

    this._SetPlayerTimer = function () {
        if (_this.myAudio == null)
            return;
        //set loop mode. no loop if play only once.
        if (_this.max_play_time == 0) //0: play once only
            _this.myAudio.loop = false;
        else
            _this.myAudio.loop = true; //-1: repeat, other value: repleat until time expires
    }

    this.AddEvents(this._SetPlayerTimer, null);

    this.AddEvents(function () {
            is_playing = true;
        }, 
        function () {
            is_playing = false;
        }
    )
}