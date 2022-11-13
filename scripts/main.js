$(function () {
    let guestName = '';
    let customGuestName = '';
    let invitationWords = '';
    let link = '';
    let customLink = '';

    let defaultLink = function () {
        let link = "https://ditakintani.muhtaromzain.com";

        return link;
    }

    let defaultBtn = function () {
        // show button
        $('#generate-btn').css('display', 'inline-block');

        // hide button
        $('#regenerate-btn').css('display', 'none');
        $('#copy-btn').css('display', 'none');
        $('#reset-btn').css('display', 'none');
    };

    let afterBtn = function () {
        // hide button
        $('#generate-btn').css('display', 'none');

        // show button
        $('#regenerate-btn').css('display', 'inline-block');
        $('#copy-btn').css('display', 'inline-block');
        $('#reset-btn').css('display', 'inline-block');
    };

    let capitalizeTheFirstLetterOfEachWord = function (words) {
      var separateWord = words.toLowerCase().split(" ");

      for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] =
          separateWord[i].charAt(0).toUpperCase() +
          separateWord[i].substring(1);
      }

      return separateWord.join(" ");
    };

    let customGuestNameForLink = function (guestName) {
        var separateGuestName = guestName.toLowerCase().split(" ");

        return separateGuestName.join("+");
    };

    let generateCustomLink = function (guestName) {
        link            = defaultLink();
        customGuestName = customGuestNameForLink(guestName);
        customLink      = link + "?to=" + customGuestName; 

        return customLink;
    }

    let generate = function (e, isRegenerate) {
        e.preventDefault();

        // get guest name
        guestName = $("#guest-name").val();

        // set default guest name
        if (!guestName) {
          guestName = "di tempat";
          link      = defaultLink();
        } else {
          guestName = capitalizeTheFirstLetterOfEachWord(guestName);
          link      = generateCustomLink(guestName);
        }

        // invitation words
        invitationWords =
          "Assalamu'alaikum Wr. Wb.\nBismillahirahmanirrahim.\n\nKepada Yth.Bapak/Ibu/Saudara/i\n" +
          guestName +
          "\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami:\n\nDita Kintani, B.Arch.\n&\nMuhtarom Zain Muhammad Sondakh, B.Sc. (CompSc)\n\nPada hari Sabtu, 7 Januari 2023\n\nBerikut link untuk info lengkap dari acara kami:\n" +
          link +
          "\n\nSuatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir pada acara pernikahan kami dan memberikan doa restu.\n\nTerima Kasih.\n\nHormat kami yang berbahagia,\nDita & Zain";

        // set value
        $("#invitation-words").val(invitationWords);

        if (!isRegenerate) {
            // show invitation words
            $("#invitation-form-group").css("display", "block");
    
            afterBtn();
        }
    };

    let reset = function (e) {
        e.preventDefault();

        // reset all input
        $(":input").val("");

        // hide invitation words
        $("#invitation-form-group").css("display", "none");

        // show default btn
        defaultBtn();
    };

    // generate
    $('#generate-btn').on('click', function (e) {
        generate(e, false);
    });

    // regenerate
    $('#regenerate-btn').on('click', function (e) {
        generate(e, true);
    });

    // reset
    $('#reset-btn').on('click', function (e) {
        reset(e);
    });

    let copiedBtn = function () {
        let copyBtn = $('#copy-btn');

        copyBtn.addClass("btn-outline-secondary");
        copyBtn.removeClass("btn-secondary");
        copyBtn.text('Copied');

        setTimeout(function () {
            copyBtn.addClass("btn-secondary");
            copyBtn.removeClass("btn-outline-secondary");
            copyBtn.text("Copy");
        }, 4000);
    };

    // copy
    $('#copy-btn').on('click', function(e) {
        let words = document.getElementById("invitation-words");

        // Select the text field
        words.select();
        words.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        // navigator.clipboard.writeText(words.value); // option (not working on mobile)
        document.execCommand("copy");

        copiedBtn();

        // Alert the copied text
        alert("Copied");
    });
});