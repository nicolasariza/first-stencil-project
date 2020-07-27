import { Component, h, Prop } from "@stencil/core";
// Importante para retornar el html importar 'h' de @stencil/core
// shadow "encapsula" el componente para que las clases externas no los afectes y viceversa
@Component({
  tag: "personal-card",
  styleUrl: "personal-card.css",
  shadow: true,
})
export class PersonalCard {
  @Prop() firstName: string = "";
  @Prop() lastName: string = "";
  @Prop() resume: string = "";
  @Prop() img: string = "";

  render() {
    return (
      <div class="b-personal-card-box">
        <div class="b-personal-card">
          <div class="b-personal-card__content">
            <div class="b-personal-card__photo-container">
              <img
                class="b-personal-card__photo"
                src={this.img}
                alt={`${this.firstName} ${this.lastName}`}
              />
            </div>
            <h2 class="b-personal-card__full-name">
              {this.firstName} {this.lastName}
            </h2>
            <div class="b-personal-card__resume">{this.resume}</div>
          </div>
        </div>
      </div>
    );
  }
}
