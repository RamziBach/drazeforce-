const Socials = ({ className }) => {
  return (
    <div className={className} aria-label="Social links">
      <a
        href="https://twitter.com/drazeforce"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
      >
        <i className="i fab fa-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/drazeforce/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <i className="i fab fa-instagram"></i>
      </a>
      <a
        href="https://www.facebook.com/DrazeForce/"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <i className="i fab fa-facebook"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UCFmw-RA25RA1YzACv90WknQ"
        target="_blank"
        rel="noopener noreferrer"
        title="Youtube"
      >
        <i className="i fab fa-youtube"></i>
      </a>
      <a
        href="https://open.spotify.com/artist/1ro5yiwSkJ27qvppIgqb7S?si=czF1QxKyTTu-Lgi9EMLt9w"
        target="_blank"
        rel="noopener noreferrer"
        title="Spotify"
      >
        <i className="i fab fa-spotify"></i>
      </a>
      <a
        href="https://soundcloud.com/drazeforce"
        target="_blank"
        rel="noopener noreferrer"
        title="Soundcloud"
      >
        <i className="i fab fa-soundcloud"></i>
      </a>
      <a
        href="https://discord.com/invite/D3U2Mss"
        target="_blank"
        rel="noopener noreferrer"
        title="Discord"
      >
        <i className="i fab fa-discord"></i>
      </a>
      <a
        href="https://www.twitch.tv/drazeforce"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitch"
      >
        <i className="i fab fa-twitch"></i>
      </a>
    </div>
  );
};

export default Socials;
