"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Common = (function () {
    function Common() {
    }
    return Common;
}());
Common.spreadfasterNormalizer = function (result) {
    var normalized = [];
    var currentColumn = 0;
    var currentRow = -1;
    for (var i = 0; i < result.length; i++) {
        var entity = result[i];
        var resultsMod = i % 2;
        currentRow = resultsMod === 0 ? (currentRow + 1) : currentRow;
        currentColumn = resultsMod;
        try {
            var caption = "";
            var name = "";
            var fullSizeUrl = "";
            var thumbUrl = "";
            var videoUrl = "";
            if (entity.network == "facebook") {
                caption = entity.name;
                name = entity.from.name;
                fullSizeUrl = entity.images[0].source;
                thumbUrl = entity.images[4].source;
                normalized.push({
                    network: "facebook",
                    caption: caption,
                    user: name,
                    imageUrl: fullSizeUrl,
                    thumbUrl: thumbUrl,
                    columnPosition: currentColumn,
                    rowPosition: currentRow
                });
            }
            else if (entity.network == "instagram") {
                if (entity.caption !== undefined) {
                    if (entity.caption.text !== undefined) {
                        caption = entity.caption.text;
                        name = entity.caption.from.username;
                    }
                    else {
                        caption = entity.caption;
                        name = entity.owner.username;
                    }
                }
                else {
                    caption = entity.content.content_body;
                    name = entity.author.name;
                }
                if (entity.images !== undefined) {
                    fullSizeUrl = entity.images.standard_resolution.url;
                    thumbUrl = entity.images.low_resolution.url;
                }
                else {
                    if (entity.content !== undefined) {
                        if (entity.content.content_picture !== undefined) {
                            fullSizeUrl = entity.content.content_picture;
                            thumbUrl = entity.content.content_picture;
                        }
                        else {
                            fullSizeUrl = entity.content.content_video_thumbnail;
                            thumbUrl = entity.content.content_video_thumbnail;
                        }
                    }
                    else {
                        fullSizeUrl = entity.display_src;
                        thumbUrl = entity.display_src;
                    }
                }
                if (entity.source !== undefined && (entity.source.source_url.indexOf('.mp4') > -1 || entity.source.source_url.indexOf('.mpg') > -1 || entity.source.source_url.indexOf('.mpeg') > -1)) {
                    videoUrl = entity.source.source_url;
                }
                else {
                    videoUrl = "";
                }
                normalized.push({
                    network: "instagram",
                    caption: caption,
                    user: name,
                    imageUrl: fullSizeUrl,
                    thumbUrl: thumbUrl,
                    columnPosition: currentColumn,
                    rowPosition: currentRow
                });
            }
            else if (entity.network == "twitter") {
                if (entity.retweeted_status)
                    entity = entity.retweeted_status;
                caption = entity.text;
                name = entity.user.name;
                for (var t = 0; t < entity.entities.media.length; t++) {
                    fullSizeUrl = entity.entities.media[t].media_url_https;
                    thumbUrl = entity.entities.media[t].media_url_https + ":small";
                    normalized.push({
                        network: "twitter",
                        caption: caption,
                        user: name,
                        imageUrl: fullSizeUrl,
                        thumbUrl: thumbUrl,
                        columnPosition: currentColumn,
                        rowPosition: currentRow
                    });
                }
            }
        }
        catch (ex) {
            console.log(ex);
        }
    }
    return normalized;
};
exports.Common = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQTJIQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUEzSEQ7QUFHa0IsNkJBQXNCLEdBQUcsVUFBQyxNQUFVO0lBQzFDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUM3QixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDdEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDeEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3ZCLElBQUksVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsVUFBVSxHQUFHLFVBQVUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQzlELGFBQWEsR0FBRSxVQUFVLENBQUM7UUFFMUIsSUFBSSxDQUFDO1lBQ0osSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBRWxCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDeEIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFN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VSxDQUFDLElBQUksQ0FBQzt3QkFDZixPQUFPLEVBQUUsU0FBUzt3QkFDbEIsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLElBQUksRUFBRSxJQUFJO3dCQUNWLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsY0FBYyxFQUFFLGFBQWE7d0JBQzdCLFdBQVcsRUFBRSxVQUFVO3FCQUN2QixDQUFDLENBQUM7Z0JBQ0osQ0FBQztZQUNGLENBQUM7UUFDRixDQUFDO1FBQ0QsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsQ0FBQztJQUNGLENBQUM7SUFFRSxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BCLENBQUMsQ0FBQTtBQXpIUSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tb24gXHJcbnsgICAgXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgc3ByZWFkZmFzdGVyTm9ybWFsaXplciA9IChyZXN1bHQ6YW55KTpBcnJheTxhbnk+ID0+IHtcclxuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWQgPSBbXTtcclxuXHRcdFx0dmFyIGN1cnJlbnRDb2x1bW4gPSAwO1xyXG5cdFx0XHR2YXIgY3VycmVudFJvdyA9IC0xO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBlbnRpdHkgPSByZXN1bHRbaV07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIHJlc3VsdHNNb2QgPSBpICUgMjtcclxuXHRcdFx0XHRjdXJyZW50Um93ID0gcmVzdWx0c01vZCA9PT0gMCA/IChjdXJyZW50Um93ICsgMSkgOiBjdXJyZW50Um93O1xyXG5cdFx0XHRcdGN1cnJlbnRDb2x1bW4gPXJlc3VsdHNNb2Q7XHJcblxyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHR2YXIgY2FwdGlvbiA9IFwiXCI7XHJcblx0XHRcdFx0XHR2YXIgbmFtZSA9IFwiXCI7XHJcblx0XHRcdFx0XHR2YXIgZnVsbFNpemVVcmwgPSBcIlwiO1xyXG5cdFx0XHRcdFx0dmFyIHRodW1iVXJsID0gXCJcIjtcclxuXHRcdFx0XHRcdHZhciB2aWRlb1VybCA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGVudGl0eS5uZXR3b3JrID09IFwiZmFjZWJvb2tcIikge1xyXG5cdFx0XHRcdFx0XHRjYXB0aW9uID0gZW50aXR5Lm5hbWU7XHJcblx0XHRcdFx0XHRcdG5hbWUgPSBlbnRpdHkuZnJvbS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRmdWxsU2l6ZVVybCA9IGVudGl0eS5pbWFnZXNbMF0uc291cmNlO1xyXG5cdFx0XHRcdFx0XHR0aHVtYlVybCA9IGVudGl0eS5pbWFnZXNbNF0uc291cmNlO1xyXG5cclxuXHRcdFx0XHRcdFx0bm9ybWFsaXplZC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRuZXR3b3JrOiBcImZhY2Vib29rXCIsXHJcblx0XHRcdFx0XHRcdFx0Y2FwdGlvbjogY2FwdGlvbixcclxuXHRcdFx0XHRcdFx0XHR1c2VyOiBuYW1lLFxyXG5cdFx0XHRcdFx0XHRcdGltYWdlVXJsOiBmdWxsU2l6ZVVybCxcclxuXHRcdFx0XHRcdFx0XHR0aHVtYlVybDogdGh1bWJVcmwsXHJcblx0XHRcdFx0XHRcdFx0Y29sdW1uUG9zaXRpb246IGN1cnJlbnRDb2x1bW4sXHJcblx0XHRcdFx0XHRcdFx0cm93UG9zaXRpb246IGN1cnJlbnRSb3dcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChlbnRpdHkubmV0d29yayA9PSBcImluc3RhZ3JhbVwiKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZW50aXR5LmNhcHRpb24gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlbnRpdHkuY2FwdGlvbi50ZXh0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNhcHRpb24gPSBlbnRpdHkuY2FwdGlvbi50ZXh0O1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZSA9IGVudGl0eS5jYXB0aW9uLmZyb20udXNlcm5hbWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FwdGlvbiA9IGVudGl0eS5jYXB0aW9uO1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZSA9IGVudGl0eS5vd25lci51c2VybmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FwdGlvbiA9IGVudGl0eS5jb250ZW50LmNvbnRlbnRfYm9keTtcclxuXHRcdFx0XHRcdFx0XHRuYW1lID0gZW50aXR5LmF1dGhvci5uYW1lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZW50aXR5LmltYWdlcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0ZnVsbFNpemVVcmwgPSBlbnRpdHkuaW1hZ2VzLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsO1xyXG5cdFx0XHRcdFx0XHRcdHRodW1iVXJsID0gZW50aXR5LmltYWdlcy5sb3dfcmVzb2x1dGlvbi51cmw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVudGl0eS5jb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbnRpdHkuY29udGVudC5jb250ZW50X3BpY3R1cmUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdWxsU2l6ZVVybCA9IGVudGl0eS5jb250ZW50LmNvbnRlbnRfcGljdHVyZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGh1bWJVcmwgPSBlbnRpdHkuY29udGVudC5jb250ZW50X3BpY3R1cmU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVsbFNpemVVcmwgPSBlbnRpdHkuY29udGVudC5jb250ZW50X3ZpZGVvX3RodW1ibmFpbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGh1bWJVcmwgPSBlbnRpdHkuY29udGVudC5jb250ZW50X3ZpZGVvX3RodW1ibmFpbDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmdWxsU2l6ZVVybCA9IGVudGl0eS5kaXNwbGF5X3NyYztcclxuXHRcdFx0XHRcdFx0XHRcdHRodW1iVXJsID0gZW50aXR5LmRpc3BsYXlfc3JjO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGVudGl0eS5zb3VyY2UgIT09IHVuZGVmaW5lZCAmJiAoZW50aXR5LnNvdXJjZS5zb3VyY2VfdXJsLmluZGV4T2YoJy5tcDQnKSA+IC0xIHx8IGVudGl0eS5zb3VyY2Uuc291cmNlX3VybC5pbmRleE9mKCcubXBnJykgPiAtMSB8fCBlbnRpdHkuc291cmNlLnNvdXJjZV91cmwuaW5kZXhPZignLm1wZWcnKSA+IC0xKSkge1xyXG5cdFx0XHRcdFx0XHRcdHZpZGVvVXJsID0gZW50aXR5LnNvdXJjZS5zb3VyY2VfdXJsO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHZpZGVvVXJsID0gXCJcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0bm9ybWFsaXplZC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRuZXR3b3JrOiBcImluc3RhZ3JhbVwiLFxyXG5cdFx0XHRcdFx0XHRcdGNhcHRpb246IGNhcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0dXNlcjogbmFtZSxcclxuXHRcdFx0XHRcdFx0XHRpbWFnZVVybDogZnVsbFNpemVVcmwsXHJcblx0XHRcdFx0XHRcdFx0dGh1bWJVcmw6IHRodW1iVXJsLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHVtblBvc2l0aW9uOiBjdXJyZW50Q29sdW1uLFxyXG5cdFx0XHRcdFx0XHRcdHJvd1Bvc2l0aW9uOiBjdXJyZW50Um93XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoZW50aXR5Lm5ldHdvcmsgPT0gXCJ0d2l0dGVyXCIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVudGl0eS5yZXR3ZWV0ZWRfc3RhdHVzKVxyXG5cdFx0XHRcdFx0XHRcdGVudGl0eSA9IGVudGl0eS5yZXR3ZWV0ZWRfc3RhdHVzO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FwdGlvbiA9IGVudGl0eS50ZXh0O1xyXG5cdFx0XHRcdFx0XHRuYW1lID0gZW50aXR5LnVzZXIubmFtZTtcclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgdCA9IDA7IHQgPCBlbnRpdHkuZW50aXRpZXMubWVkaWEubGVuZ3RoOyB0KyspIHtcclxuXHRcdFx0XHRcdFx0XHRmdWxsU2l6ZVVybCA9IGVudGl0eS5lbnRpdGllcy5tZWRpYVt0XS5tZWRpYV91cmxfaHR0cHM7XHJcblx0XHRcdFx0XHRcdFx0dGh1bWJVcmwgPSBlbnRpdHkuZW50aXRpZXMubWVkaWFbdF0ubWVkaWFfdXJsX2h0dHBzICsgXCI6c21hbGxcIjtcclxuXHJcblx0XHRcdFx0XHRcdFx0bm9ybWFsaXplZC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdG5ldHdvcms6IFwidHdpdHRlclwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FwdGlvbjogY2FwdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdHVzZXI6IG5hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHRpbWFnZVVybDogZnVsbFNpemVVcmwsXHJcblx0XHRcdFx0XHRcdFx0XHR0aHVtYlVybDogdGh1bWJVcmwsXHJcblx0XHRcdFx0XHRcdFx0XHRjb2x1bW5Qb3NpdGlvbjogY3VycmVudENvbHVtbixcclxuXHRcdFx0XHRcdFx0XHRcdHJvd1Bvc2l0aW9uOiBjdXJyZW50Um93XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2ggKGV4KSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhleCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG4gICAgICByZXR1cm4gbm9ybWFsaXplZDtcclxuICAgIH1cclxuXHJcbn0iXX0=