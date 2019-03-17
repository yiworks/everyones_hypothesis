import React from "react"
import PropTypes from "prop-types"

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: 0,
      is_liked: false,
      hovered: false,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  ajaxMain() {
    $.ajax({
      url: this.props.url,
      type:method,
      dataType: 'json',
      cache: false,
      data: {post_id: this.props.post},
    })
    console.log("Like!");
  }

  onMouseEnter() {
    this.setState({hovered: true});
  }

  onMouseLeave() {
    this.setState({hovered: false});
  }

  onClick() {
    this.setState({
      counts: this.state.counts + (this.state.is_liked ? -1 : 1),
      is_liked: !this.state.is_liked
    });
  }

  styles() {
    return {
      container: {
        fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
        fontSize: 11
      },
      like: {
        display: "inline-block",
        background: "#3b5998",
        padding: "0px 5px",
        borderRadius: 2,
        color: "#ffffff",
        cursor: "pointer",
        float: "left",
        height: 20,
        lineHeight: "20px"
      },
      likeHover: {
        background: "#444"
      },
      counterBefore: {
        display: "block",
        float: "left",
        width: 6,
        height: 6,
        background: "#fafafa",
        marginLeft: "-12px",
        borderRight: 10,
        transform: "rotate(45deg)",
        WebkitTransform: "rotate(45deg)",
        marginTop: 6,
        borderLeft: "1px solid #aaa",
        borderBottom: "1px solid #aaa"
      },
      counter: {
        display: "block",
        background: "#fafafa",
        boxSizing: "border-box",
        border: "1px solid #aaa",
        float: "left",
        padding: "0px 8px",
        borderRadius: 2,
        marginLeft: 8,
        height: 20,
        lineHeight: "20px"
      }
    };
  }

  render() {
    const styles = this.styles();
    const likeStyle = this.state.hovered ? {...styles.like, ...styles.likeHover} : styles.like;
    console.log(this.state);

    return (
        <span style={styles.container}>
          <span
            style={likeStyle}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={this.onClick}>{this.state.is_liked ? "✔" : ""} いいね!</span>
          <span style={styles.counter}>
            <span style={styles.counterBefore}>{" "}</span>{this.state.counts}
          </span>
        </span>
    );
  }
}

export default Like
