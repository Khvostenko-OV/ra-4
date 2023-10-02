export default function IconSwitch(icon, onSwitch) {
  return (
    <div style={{textAlign: 'right'}}>
      <span className="material-icons" style={{cursor: 'pointer'}} onClick={onSwitch}>{icon}</span>
    </div>
  );
}
