import{a as F}from"./chunk-AOV6ZSFR.js";import{g as M,h as D,j as P,k as O,x as E}from"./chunk-DYZONV3K.js";import{Ab as f,Bb as s,Ma as w,Pa as c,Pb as r,Qb as b,Rb as u,Yb as C,Za as $,Zb as y,cb as k,fa as g,ga as x,hb as _,pb as p,qb as o,rb as n,sb as T,wb as v}from"./chunk-WZX3WHSQ.js";function N(i,e){i&1&&(o(0,"div",5),r(1," Cart is empty "),n())}function R(i,e){if(i&1&&T(0,"img",14),i&2){let t=s().$implicit;p("src",t.image,w)}}function j(i,e){if(i&1&&(o(0,"p"),r(1),n()),i&2){let t=s().$implicit;c(),u("Barcode: ",t.barcode)}}function L(i,e){if(i&1){let t=v();o(0,"div",6)(1,"div",7),_(2,R,1,1,"img",8),o(3,"div")(4,"h4"),r(5),n(),o(6,"p"),r(7),C(8,"currency"),n(),_(9,j,2,1,"p",9),n()(),o(10,"div",10)(11,"button",11),f("click",function(){let a=g(t).$implicit,d=s();return x(d.decrease(a))}),r(12,"\u2212"),n(),o(13,"span"),r(14),n(),o(15,"button",11),f("click",function(){let a=g(t).$implicit,d=s();return x(d.increase(a))}),r(16,"+"),n()(),o(17,"div",12),r(18),C(19,"currency"),n(),o(20,"button",13),f("click",function(){let a=g(t).$implicit,d=s();return x(d.remove(a))}),r(21,"\u{1F5D1}\uFE0F"),n()()}if(i&2){let t=e.$implicit;c(2),p("ngIf",t.image),c(3),b(t.name),c(2),u("Price: ",y(8,6,t.price,"USD")),c(2),p("ngIf",t.barcode),c(5),b(t.quantity),c(4),u(" ",y(19,9,t.price*t.quantity,"USD")," ")}}function U(i,e){if(i&1){let t=v();o(0,"div",15)(1,"h3"),r(2),C(3,"currency"),n(),o(4,"button",16),f("click",function(){g(t);let a=s();return x(a.checkout())}),r(5,"Checkout"),n()()}if(i&2){let t=s();c(2),u("Total: ",y(3,1,t.getTotal(),"USD"))}}var V=class i{constructor(e){this.cartService=e}get cartItems(){return this.cartService.getCartItems()}increase(e){this.cartService.updateQuantity(e.id,e.quantity+1)}decrease(e){this.cartService.updateQuantity(e.id,e.quantity-1)}remove(e){this.cartService.removeItem(e.id)}getTotal(){return this.cartService.getTotal()}checkout(){let l=this.cartItems.map(m=>`
    <tr>
      <td>${m.name}</td>
      <td style="text-align:center;">${m.quantity}</td>
      <td style="text-align:right;">$${m.price.toFixed(2)}</td>
      <td style="text-align:right;">$${(m.price*m.quantity).toFixed(2)}</td>
    </tr>
  `).join(""),a=this.getTotal(),d=a*.1,I=(a-d)*.07,q=a-d+I,z=new Date().toLocaleString(),S=Math.floor(Math.random()*1e6),B=`
    <html>
      <head>
        <style>
          body { font-family: 'Courier New', monospace; padding: 20px; color: #2f362f; }
          h2, h3 { text-align: center; margin: 0; }
          .logo { text-align:center; margin-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { padding: 6px; border-bottom: 1px dashed #788978; }
          th { text-align: left; }
          tfoot td { border-top: 2px solid #788978; font-weight: bold; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; }
          .barcode { text-align:center; margin-top:10px; font-family: 'Libre Barcode 39', cursive; font-size: 24px; }
        </style>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap" rel="stylesheet">
      </head>
      <body>
        <div class="logo">
          <img src="https://your-logo-url.com/logo.png" alt="POS Logo" width="120">
        </div>
        <h2>My POS System</h2>
        <h3>Sales Receipt</h3>
        <p>Date: ${z}</p>
        <p>Transaction ID: ${S}</p>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th style="text-align:center;">Qty</th>
              <th style="text-align:right;">Price</th>
              <th style="text-align:right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${l}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="text-align:right;">Subtotal</td>
              <td style="text-align:right;">$${a.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;">Discount (10%)</td>
              <td style="text-align:right;">-$${d.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;">Tax (7%)</td>
              <td style="text-align:right;">$${I.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;">Grand Total</td>
              <td style="text-align:right;">$${q.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <div class="barcode">
          *${S}*
        </div>

        <div class="footer">
          Thank you for your purchase!<br>
          Visit again!
        </div>
      </body>
    </html>
  `,h=window.open("","","width=400,height=600");h&&(h.document.write(B),h.document.close(),h.print()),this.cartService.clearCart()}static \u0275fac=function(t){return new(t||i)($(F))};static \u0275cmp=k({type:i,selectors:[["app-cart"]],decls:6,vars:3,consts:[[1,"cart-container"],[1,"title"],["class","empty",4,"ngIf"],["class","cart-item",4,"ngFor","ngForOf"],["class","footer",4,"ngIf"],[1,"empty"],[1,"cart-item"],[1,"item-left"],["class","thumb",3,"src",4,"ngIf"],[4,"ngIf"],[1,"qty-controls"],[3,"click"],[1,"item-total"],[1,"remove-btn",3,"click"],[1,"thumb",3,"src"],[1,"footer"],[1,"checkout-btn",3,"click"]],template:function(t,l){t&1&&(o(0,"div",0)(1,"h2",1),r(2,"\u{1F6D2} Cart"),n(),_(3,N,2,0,"div",2)(4,L,22,12,"div",3)(5,U,6,4,"div",4),n()),t&2&&(c(3),p("ngIf",l.cartItems.length===0),c(),p("ngForOf",l.cartItems),c(),p("ngIf",l.cartItems.length>0))},dependencies:[O,M,D,E,P],styles:[".cart-container[_ngcontent-%COMP%]{padding:20px;background:#f8faf9;min-height:100vh}.title[_ngcontent-%COMP%]{color:#2f362f;margin-bottom:20px}.cart-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:#d9d3c6;margin-bottom:12px;padding:15px;border-radius:10px}.item-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}.thumb[_ngcontent-%COMP%]{width:55px;height:55px;object-fit:cover;border-radius:5px}.qty-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#2f362f;color:#f8faf9;border:none;width:28px;height:28px;border-radius:5px;cursor:pointer}.qty-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 10px;font-size:18px;color:#2f362f}.item-total[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#2f362f}.remove-btn[_ngcontent-%COMP%]{background:transparent;color:#2f362f;font-size:18px;border:none;cursor:pointer}.footer[_ngcontent-%COMP%]{margin-top:20px;padding-top:20px;border-top:2px solid #788978}.checkout-btn[_ngcontent-%COMP%]{width:100%;padding:15px;border-radius:8px;background:#788978;color:#f8faf9;border:none;cursor:pointer;font-size:18px}"]})};export{V as CartComponent};
