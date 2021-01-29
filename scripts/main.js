
require("crafter");

Events.on(EventType.ClientLoadEvent, cons(e => {

    var dialog = new JavaAdapter(BaseDialog, {}, "注意:打开部分工厂的介绍时会闪退，请在\"配方列表\"的介绍查看其配方");
    var adminIcon =new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find("representation", Core.atlas.find("clear")));
    dialog.shown(run(() => {
        dialog.cont.table(Tex.button, cons(t => {
            t.defaults().size(250, 45).left();
            t.button("进入游戏", adminIcon, Styles.cleart, run(() => {
                dialog.hide();
            }));
    	t.add("如有需要请加qq群1021639255")
        }));
    }));
    dialog.show();
}));