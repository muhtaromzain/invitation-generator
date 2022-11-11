$(function () {
    let guestName = '';
    let customGuestName = '';
    let invitationWords = '';
    let link = 'https://ditakintani.muhtaromzain.com/';
    let customLink = '';

    $('#generate-btn').on('click', function (e) {
        e.preventDefault();

        // get guest name
        guestName = $('#guest-name').val();

        // invitation words
        invitationWords = "Assalamu'alaikum Wr. Wb.\nBismillahirahmanirrahim.\n\nKepada Yth.Bapak/Ibu/Saudara/i\n" + guestName + 
                          "\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami:\n\nDita Kintani, B.Arch.\n&\nMuhtarom Zain Muhammad Sondakh, B.Sc. (CompSc)\n\nPada hari Sabtu, 7 Januari 2023\n\nBerikut link untuk info lengkap dari acara kami:\n" + link +
                          "\n\nSuatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir pada acara pernikahan kami dan memberikan doa restu.\n\nTerima Kasih.\n\nHormat kami yang berbahagia,\nDita & Zain";

        // set value
        $('#invitation-words').val(invitationWords);

        // show invitation words
        $('#invitation-form-group').css('display', 'block');
    });

});