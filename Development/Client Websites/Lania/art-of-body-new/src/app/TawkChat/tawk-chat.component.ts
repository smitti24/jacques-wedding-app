import {
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-tawk-chat",
  templateUrl: "./tawk-chat.component.html",
  styleUrls: ["./tawk-chat.component.scss"],
})
export class TawkChatComponent implements OnInit {
  script = this._renderer.createElement("script");

  constructor(
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document: any
  ) {}

  ngOnInit() {
    this.script.text = `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5fa828e70a68960861bcdb17/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`;
    this._renderer.appendChild(this._document.body, this.script);
  }
}
