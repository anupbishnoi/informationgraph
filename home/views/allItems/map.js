function(doc) {
  if (doc.type === "item") {
    emit(doc.value, null);
  }
};
